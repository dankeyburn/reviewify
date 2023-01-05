from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool
from queries.users import Error


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
    reviews: list[ReviewOut]


class ReviewQueries:
    def get_all_reviews(self):
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
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.id] = row[i]
                    results.append(record)

                return results
