# APIs

## Accounts

- **Method**: `POST`, `GET`, `GET`, `PUT`, `DELETE`,
- **Path**: `/api/accounts`, `/api/accounts/<int:pk>`
  Input:

```json
{
  "email": str,
  "password": str,
  "username": str,

}
```

Output:

```json
{
  "id": int,
  "email": str,
  "username": str,
  "hashed_password": str,

}
```

Creating a new account saves the username, email, and password. This adds a new account to the database which can be which can be then accessed by logging in.

## Reviews

- **Method**: `POST`, `GET`, `GET`, `PUT`, `DELETE`,
- **Path**: `/api/reviews`, `/api/reviews/<int:pk>`
  Input:

```json
{
  "reviewer_id": int,
  "title": str,
  "rating": int,
  "content": str,
  "album_id": int,
  "best_song": Optional[str],
  "worst_song": Optional[str],
  "img_url": str


}
```

Output:

```json
{
  "id": int

}
```

Creating a new review saves the reviewer_id, title, rating, content, album_id, best_song (optional), worst_song (optional), and img_url. This adds a new review to the database which can be viewed by a user.
