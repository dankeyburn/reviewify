Journal 1/1
Today I worked through a tutorial to create a REACT application that makes searches for albums using Spotify's api.
The application works well and produces mostly accurate results based on search input of specific artists.

Journal 1/4
Today I set up the group repo on Gitlab for our project and we started working on project set up.


Journal 1/9
 Today we added fastAPI routes for accounts and worked through integrating Spotify as a third-party API service on the back end using the spotipy python library

Journal 1/10
Today we added routes to list albums by the artist through Spotify API, and added a filter to the API call to remove the section of the market from details to make JSON response easier to read through and
we fixed authenticator so that a new account could be generated on the back end along with an authentication token that can be used to login

Journal 1/11
Today we added if clauses in the review routers to prevent authenticated users from being able to delete or change reviews that were posted by other users

Journal 1/12
Today I worked on converting the code from the Spotify react app I made earlier to use our new back-end calls to display all albums by an artist from Sopitfy's database.
Then we made modals that open from the displayed album cards to lead users to options for creating a review
or viewing reviews for that album.

Journal 1/15
Today I added routes to existing components to the main react app file.  And I added buttons to the album modal that direct users to a review form or to see
reviews for said album. The review form button routes correctly and allows the user to leave a review, see review button works but the component does not yet.

Journal 1/17
Today we successfully implemented functioning buttons on the album modal to allow users to review an album and see a list of reviews for that album. I modified the review table on the back end to include an image URL, and we succesfully added full CRUD for the altered review model and front-end functionality.


Journal 1/18
Today we made a component to allow users to see a list of all reviews in the database

Journal 1/23
Today I worked with Joe on the get review unit test.

Journal 1/24
Today we got the get review unit test working and Joe and I worked on getting the edit review form working and the delete review function working from the front end.

Journal 1/27
Last-minute changes and bug fixes. Made some fires and put them out. On to stretch goals
