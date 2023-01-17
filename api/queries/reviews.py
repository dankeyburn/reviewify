from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool



class ReviewIn(BaseModel):
    reviewer_id: int
    title: str
    rating: int
    content: str
    album_id: str
    best_song: Optional[str]
    worst_song: Optional[str]


class ReviewOut(ReviewIn):
    id: int


class ReviewsOutAll(BaseModel):
    reviews: List[ReviewOut]


class ReviewQueries:
    def get_all_reviews(self) -> ReviewsOutAll:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                        , reviewer_id
                        , title
                        , rating
                        , content
                        , album_id
                        , best_song
                        , worst_song
                    FROM reviews
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_review(self, id) -> ReviewOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                        , reviewer_id
                        , title
                        , rating
                        , content
                        , album_id
                        , best_song
                        , worst_song
                    FROM reviews
                    WHERE id = %s
                    """,
                    [id]
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record


    def update_review(self, review_id, review: ReviewIn) -> ReviewOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    review.reviewer_id,
                    review.title,
                    review.rating,
                    review.content,
                    review.album_id,
                    review.best_song,
                    review.worst_song,
                    review_id
                ]
                cur.execute(
                    """
                    UPDATE reviews
                    SET reviewer_id = %s
                        , title = %s
                        , rating = %s
                        , content = %s
                        , album_id = %s
                        , best_song = %s
                        , worst_song = %s
                    WHERE id = %s
                    RETURNING id, reviewer_id, title, rating, content, album_id, best_song, worst_song
                    """,
                    params,
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record


    def create_review(self, review: ReviewIn) -> ReviewOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    review.reviewer_id,
                    review.title,
                    review.rating,
                    review.content,
                    review.album_id,
                    review.best_song,
                    review.worst_song
                ]
                cur.execute(
                    """
                    INSERT INTO reviews (reviewer_id, title, rating, content, album_id, best_song, worst_song)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    RETURNING id, reviewer_id, title, rating, content, album_id, best_song, worst_song
                    """,
                    params,
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record

    def delete_review(self, review_id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM reviews
                    WHERE id = %s
                    """,
                    [review_id],
                )
