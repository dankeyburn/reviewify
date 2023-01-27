1/26/23

We cleaned up the project for our presentation to Candice.
Later, Joe and I worked on a dark and light mode for the site using Font Awesome.
Design-wise, Joe, Noah and I were looking at possible rearrangements the review/album modals.


1/25/23

We finally got the update test to pass! The problem was that the reviewer_id value was being compared to property of a review instance.
Because of that comparison, we needed to use dot notation instead of bracket notation.


1/13/23

The first draft of the review form was completed and we were able to remove the duplicate albums from our calls.
We had a couple of issues with radios we were using to select numbered ratings.


1/12/23

Noah and Joe made a great theme for the main page and we worked on the search bar
We changed the "https" in our fetch request to "http" to get the past the invalid request method.
We also fixed a cors error by importing corsheaders to the main.py.


1/11/23

We were able to add dependancies and made sure that account CRUD was only accessible
to the account holder as opposed to any logged in user.
We also started working on first page of the react app.


1/10/23

We worked on the authentication for the backend. We had an issue our CRUD; 500 errors.
The problem seemed to be the change from "email" to "username" in the authenticator.py
and the accounts.queries.py
