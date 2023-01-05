steps = [
    [
        ## Create the table
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(20) NOT NULL UNIQUE,
            email VARCHAR(319) NOT NULL UNIQUE
        );
        """,
        ## Drop the table
        """
        DROP TABLE users;
        """
    ]
]
