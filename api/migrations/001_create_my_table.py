steps = [
    [
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(200) NOT NULL,
            hashed_password VARCHAR(200) NOT NULL,
            username VARCHAR(250) NOT NULL
        );
        """,
        """
        DROP TABLE accounts;
        """

    ],
    [
        """
        CREATE TABLE reviews(
            id SERIAL PRIMARY KEY NOT NULL,
            reviewer_id INTEGER REFERENCES accounts("id") ON DELETE CASCADE,
            title TEXT NOT NULL,
            rating INTEGER NOT NULL check(rating = 1 or rating = 2 or rating = 3 or rating = 4 or rating = 5),
            content TEXT NOT NULL,
            album_id VARCHAR(300) NOT NULL,
            best_song VARCHAR(100),
            worst_song VARCHAR(100),
            img_url VARCHAR(2000)
        )
        """,

        """
        DROP TABLE reviews;
        """
    ]
]
