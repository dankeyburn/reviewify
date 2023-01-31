import os
from psycopg_pool import ConnectionPool


# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
# pool = ConnectionPool(conninfo=f"process.env{DATABASE_URL}")
pool = ConnectionPool(conninfo=process.env["DATABASE_URL"])
