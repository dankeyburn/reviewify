#Dan's Journal

##12/22: 
Feeling very confident about group, and we're off to a great start with a well-defined app goal. Our wireframe is solid, and leaves room for stretch goals as well as more ideas.


##1/3: 
Coming back from break, feeling great about our app after Kornebari presented it to the class. Ours was the only group with a functioning react page making calls to Spotify's API. 


##1/5: 
I took a turn at driving today, and we successfully built functionality to connect to our tables with the combined efforts of our group.
It took a number of attempts of building and deconstructing, but working as a team we were able to create CRUD functionality reflected in swagger for our Reviews database.
Today I learned about proper merge control in gitlab - and I'm assuming github is similar if not the same. The merge approval process allows our group to approve or ask questions about a branch before merging into main, a process I'll undoubtedly use throughout my SWE career.


##1/9: 
With Joe driving, we knocked out the Authentication and Login/Logout functionality.
Trying and failing until you succeed is still success! We even had time to create full CRUD for our Accounts database.
Today I learned about the F2/Rename symbol functionality in VSCode. It was nice to learn it as a group, that way we could help reinforce learning by reminding ourselves of opportunities to use it.


##1/12: 
With Ethan driving, we were able to create a search bar that allows a user to search for and view artist results, utilizing a call to spotify's API.
We also created a good starting theme with bootstrap, and which will undoubtedly change throughout the project.


##1/13: 
Overnight, Noah and Joe worked independently to knock out further functionality for the album detail retrieval and a react modal form to create a new review.

Today, We split into two group, and Ethan, Noah, and I once again tackled the album details page. When we got stuck trying to return the album's tracks, I was able to clear that roadblock by remembering the use of the '?' operator after calling an object (i.e: album.tracks?) as a catch-all to returning album.tracks only if it exists. This fix got our tracks listing in our .map(), allowing us to move on to the next hurdle: showing the album image.

##1/14: 
I fixed the NavLink error we had before (we needed to install react-router-dom on the react api). Although we aren't utilizing NavLink, but Link instead, overcoming the import error allowed us not to be slowed down by other instances where the same error occured.

##1/17: 
I took turns driving with Joe after we paired up to knock out creating a CSS file, LoginModal, and SignupModal. Kornebari, Noah, and Ethan teamed up to work on the create_album_review form functionality, and successfully paired data from spotify's API with our back-end review data.

##1/18: 
Kornebari created a chihuahua png (for transparent background) that Joe used to add a chihuahua-cursor function, which will later be an easter-egg if you're logged in as a certain user (planned stretch goal).

AM: Ethan driving, we were able to clear up a roadblock in our prhobiting our ReviewModal from functioning. As if thematic to Modals, the problem was us passing the wrong argument (and lack of props). Modals are tough, but I'm glad we leaned into them at the beginning of our project rather than saving it as a stretch goal.
Kornebari driving, we started tackling user authorization and made little headway.
PM: After lunch, Noah took over driving and as a group we began to tackle frontendauthorization, making progress (albeit slowly). We followed the D2: Front-End Authorization Cookbook as best as we could, but confusion set in after some time and we agreed we needed to reach out to Candace for some help. We decided to table tacking frontend authorization until convening with Candace.
Ethan picked up driving to tackle building a list_all_reviews page that would list all the reviews in the database, grouped by album. With group collaboration, the page got built and reflects our intended goal.

##1/19: 
AM: Candace (and Dalonte) stopped by this morning to help us clear our front-end blockage. Noah began by driving to demo the errors we were recieving. We definitely needed the help, and learn a lot of clarifying information about different fetchConfig body types - FormData being the one we needed to send the correct information for account authorization. Huge breakthrough! Noah continued driving and we began fixing the review album page to require the user being logged in.
PM: With Joe driving, we pressed on and added functionality to the site depending on if the user is logged in. Things like login buttons, the ability to review an album, etc will not appear if a user is not logged in.
We later broke into two groups, and Noah, Kornebari, and myself began working on creating a page where a user can view their reviews.

##1/20: 
AM: After standup, we split off into groups. Kornebari, Joe, and myself grouped up to tackle unit testing. I drove, and used the unit test exploration and Riley's truckTest.py as a guide. We got stuck when our test kept failing due to validation errors. I made suure I spoke my logic outloud as we try different variables and failed.

PM: After lunch, we broke out into our same groups and Joe took a shot at driving. Although progress (or lack thereof) was still the same, it was refreshing to get a different angle on the problem by watching versus driving. 

##1/23: 
AM: Practice Test

PM: We started off deconflicting merge requests and pruning our branches in gitlab with Kornebari driving. After some struggle, deconfliction was complete and we moved on to knocking out unit tests. We decided to write unit tests as a group, taking turns driving and pushing our tests as we completed them in order to keep track of who created which tests. By 4:48 PM I had my delete review unit test working! I am overflowing with feelings of catharsis.

##1/24: 
AM: After the Practice Test Review, we knocked out our stand up for the day and helped Noah fix his unit test (list reviews) pretty easily - a variable in the assert statement was stopping our test from passing, which we cleared up by passing the correct'reviews' value in the function's definition. Kornebari, Ethan, and Joe split off to tackle Ethan & Kornebari's unit test, while Noah and myself split off to tackle the edit user page. 
I took a crack at creating a rough draft for our README.md using the smelli-belli readme.md as a guide, and quickly was overwhelmed by the amount of Readme.md's created by the guide. I created the main README.md, along with a folder containing our wireframes, as well as apis.md, ghi.md, integrations.md, and data-model.md. I pushed these changes to a new branch called 'readme'.
PM: During post-lunch attendance, I audited our project for oustanding items for the to-do list (i.e. replacing 'localhost:8000' with os.environ calls). We reconvened after attendance and, with Ethan driving, all tackled the create review page. 

##1/25: 
AM: This morning was crunch time, and we focused on debugging issues most commonly associated with passing props from components working with modal forms. It makes it difficult to narrow down issues, and in hindsight we should've built out functionality with pages first, and switch to modals only after MVP is completed.
PM: More crunch, more progress, goal in sight. We went through and audited the functionality of our app and debugged together, too many issues to enumerate. We also organized our file structure and consolidated files into relevant folders, eliminated comments and unused variables, and mentally prepared to debut our app tomorrow for Candice.

##1/26:
AM: Today's the day, and we went through our site once more to ensure full functionality before debuting our project with Candice.
PM: We showed off our project to Candice.

##Days I drove: 
1/4, 1/10, 1/12, 1/13, 1/17, 1/20, 1/23, 1/25, 1/26