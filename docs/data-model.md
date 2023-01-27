# Data models

### Account

| name            | type   | unique | optional |
| --------------- | ------ | ------ | -------- |
| id              | int    | yes    | no       |
| email           | string | no     | no       |
| hashed_password | string | no     | no       |
| username        | string | no     | no       |

### Reviews

| name        | type   | unique | optional |
| ----------- | ------ | ------ | -------- |
| reviewer_id | int    | yes    | no       |
| title       | string | no     | no       |
| rating      | string | no     | no       |
| content     | string | no     | no       |
| album_id    | string | yes    | no       |
| best_song   | string | no     | yes      |
| worst_song  | string | no     | yes      |
| img_url     | string | no     | no       |
