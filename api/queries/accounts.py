import os
from typing import Optional, List, Union
from datetime import date
from pydantic import BaseModel
from queries.pool import pool


class Account(BaseModel):
    id: int
    email: str
    hashed_password: str
    username: str

class AccountOut(BaseModel):
    id: int
    email: str
    username: str
    hashed_password: str

class AccountIn(BaseModel):
    email: str
    password: str
    username: str

class AccountsOutAll(BaseModel):
    accounts: List[AccountOut]

class AccountsQueries:
    def get_account(self, id: int) -> AccountOut:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our SELECT statement
                result = db.execute(
                    """
                    SELECT id
                         , email
                         , hashed_password
                         , username
                    FROM accounts
                    WHERE id = %s;
                    """,
                    [id]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return Account(
                    id=record[0],
                    email=record[1],
                    hashed_password=record[2],
                    username=record[3],
                )

    def get_all_accounts(self) -> AccountsOutAll:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                        , email
                        , hashed_password
                        , username
                    FROM accounts
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def create_account(self, account: AccountIn, hashed_password: str) -> AccountOut:
        # connect the database
        with pool.connection() as conn:
            # get a cursor (something to run SQL with)
            with conn.cursor() as db:
                # Run our SELECT statement
                result = db.execute(
                    """
                    INSERT INTO accounts (email, hashed_password, username)
                    VALUES (%s, %s, %s)
                    RETURNING id;
                    """,
                    [account.email, hashed_password, account.username]
                )
                id = result.fetchone()[0]
                return AccountOut(
                    id=id,
                    email=account.email,
                    hashed_password=hashed_password,
                    username=account.username,
                )

    def update_account(self, account_id, account: AccountIn) -> AccountOut:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    params = [
                        account.email,
                        account.username,
                        account.password,
                        account_id
                    ]
                    cur.execute(
                        """
                        UPDATE accounts
                        SET email = %s
                            , username = %s
                            , hashed_password = %s
                        WHERE id = %s
                        RETURNING id, email, username, hashed_password
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


    def delete_account(self, account_id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM accounts
                    WHERE id = %s
                    """,
                    [account_id],
                )
