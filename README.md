# Music Reviewify

-   Ethan Beber
-   Dan Keyburn
-   Joe Lock
-   Noah Maurer
-   Kornebari Nantah

## Design

-   [API Design](docs/apis.md)
-   [Data model](docs/data-model.md)
-   [GHI](docs/ghi.md)
-   [API Design](docs/apis.md)

## Intended market

We are targeting general consumers in the music appreciation community who are looking for reviews from other listeners.

## Functionality

-   Visitors can search for an artist and the page populates with cards of their albums. Visitors can then click the album to see album release date, album title, tracks, album art, and any reviews the album has received from logged in users. Visitors can then click the reviews as well and read at their leisure. Visitors can also click a All Reviews button to populate the page with cards of reviews. Finally, visitors can create a user account by clicking the Sign Up button.

-   Logged-in users can search for an artist and receive a list of their albums. Users can then click the album to see album release date, album title, tracks, album art, and any reviews the album has received from other users. Users can then click the reviews as well and read at their leisure. Users can also click on the My Reviews button to see a page populated with cards of their reviews. Users can also click a All Reviews button to populate the page with cards of reviews. Finally, logged-in users can log out by clicking the Log Out button.

## Project Initilization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create pg-admin`
4. Run `docker volume create music`
5. Run `docker compose build`
6. Run `docker compose up`
7. Exit the container's CLI, and enjoy Music Reviewify's music review database.
