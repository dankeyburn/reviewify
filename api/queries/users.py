from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool



class Error(BaseModel):
    message: str


class UserIn(BaseModel):
    email: str
    username: str


class UserOut(UserIn):
    id: int


class UsersOutAll(BaseModel):
    users: List[UserOut]

class UserQueries:
    def get_all_users(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, email, username
                    FROM users
                    ORDER BY id
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_user(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, email, username
                    FROM users
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

    def create_user(self, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    user.email,
                    user.username,
                ]
                cur.execute(
                    """
                    INSERT INTO users (email, username)
                    VALUES (%s, %s)
                    RETURNING id, email, username
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

    def update_user(self, user_id, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    user.email,
                    user.username,
                    user_id,
                ]
                cur.execute(
                    """
                    UPDATE users
                    SET email = %s
                      , username = %s
                    WHERE id = %s
                    RETURNING id, email, username
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

    def delete_user(self, user_id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM users
                    WHERE id = %s
                    """,
                    [user_id],
                )
