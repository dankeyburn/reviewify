-- DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE
);

-- CREATE TABLE reviews (
--     id SERIAL NOT NULL UNIQUE,
--     title TEXT NOT NULL,
--     content TEXT NOT NULL,
--     reviewer_id INTEGER REFERENCES users("id") ON DELETE CASCADE,
--     rating INTEGER NOT NULL check(rating = 1 or rating = 2 or rating = 3 or rating = 4 or rating = 5),
--     truck_id INTEGER NOT NULL REFERENCES trucks("id") ON DELETE CASCADE
-- );

INSERT INTO users VALUES
 (1, 'John@gmail.com', 'Jsmith'),
 (2, 'Dave@gmail.com', 'Djones')
 ;

SELECT setval('users_id_seq', (SELECT MAX(id) + 1 FROM users));
