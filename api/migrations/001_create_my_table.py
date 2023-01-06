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
    ],
    [
        """
        CREATE TABLE reviews(
            id SERIAL PRIMARY KEY NOT NULL,
            reviewer_id INTEGER REFERENCES users("id") ON DELETE CASCADE,
            title TEXT NOT NULL,
            rating INTEGER NOT NULL check(rating = 1 or rating = 2 or rating = 3 or rating = 4 or rating = 5),
            content TEXT NOT NULL,
            album_id VARCHAR(300) NOT NULL,
            best_song VARCHAR(100),
            worst_song VARCHAR(100)
        )
        """,

        """
        DROP TABLE reviews;
        """
    ]
]
