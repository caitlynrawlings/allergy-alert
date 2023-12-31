# Status Report: October 25
## Team Report
#### Last Week's Goals:
- Find websites or datasets that we could incorporate into our database
- Construct the database
- Discuss and determine what format we will store our data in
- Start scraping those websites or reading those datasets
- Decide on what front end technologies/frameworks we will use
- Complete architecture and design milestone

#### Progress and Issues:
What we did: Completed architecture and design milestone. Found a dataset of recipes and set up a database. Completed UI mockup.

What worked: Team communication worked well through discord. Setting up schedule to layout our tasks so we have a better idea of the project timeline and what will be feasible.

What we learned: Learned about how MongoDB will interface with expressJS. 

Where we had trouble: We encountered difficulties in understanding how MongoDB will interface with ExpressJS. While progress was made, there were still uncertainties about the integration of these technologies. This lack of clarity led to some delays in setting up our database and developing the backend.

Where we are blocked: There are knowledge gaps in specific areas of the tools that we are using. These gaps have resulted from varying levels of familiarity with the technologies we are planning on utilizing.

#### Plans for next week:
- Create REST API
- Git, Testing and CI milestone
- Implement search logic for finding recipes
- Implement percentage calculation feature
- Develop README doc more

The next deadline to work toward will be: implement search logic by 11/4

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
- Learn more about MongoDB and how we might want to implement it
- Make a very tiny full stack project so that I can get a better understanding of combining the front-end with the back-end

#### Progress and Issues:
What I did: I established the database on MongoDB and implemented it into our repository. I included two “collections” (basically sub-databases): one for user accounts, and the other for all the recipes we will be storing. While implementing it, I also added documentation to the load_db.py file that includes how to use important database functions such as find(), insert_one(), and delete_one(). I also watched several YouTube videos that covered the basics of using MongoDB and a REST API, two things that we are still not sure if we are going to use.

What worked: Doing additional research on how MongoDB and REST APIs work gave me more confidence when it came to using those tools to create a functioning front-end and back-end connection. More research still needs to be done, but I feel like I have a basic understanding of those tools at the moment.

What I learned: I learned about the various MongoDB functions that we could use to insert and remove entries in the database. I also learned how to use HTTP requests to get information from the database as well as send that information back using HTTP responses.

Where I had trouble: I had some trouble catching up with new ideas that the group came up with since I could not attend last Thursday’s meeting. This has resulted in me falling behind the others in my group, although I hope to get a full understanding of our plan over the next few days through team communication and reading everybody else’s individual status reports.

Where I was blocked: I had an interview this past Thursday that prevented me from going to the meeting, so I feel a little behind when it comes to how we will be implementing the database. I also tested positive for COVID this Tuesday, so I will not be able to attend the meeting this Thursday either.

#### Plans for next week: 
-Get a full understanding of how we want to store the data as well as search through it via complex searches
-Learn more about the MERN technology stack as we might be using it going forward
-Prepare the database for the inclusion of recipes by establishing attributes for each entry (if we continue with the database idea)

### Phillip Phan
#### Last Week's Goals:
- I plan to learn more about MongoDB
- Look at the datasets and plan a structure for the database

#### Progress and Issues:
What I did: I made python code to parse the data into something that will be insertable into database

What worked: Using python to read the data and then parse it.

What I learned: I learned more about pandas and how to use pandas to parse the data into what I needed.

Where I had trouble: I had some trouble reading the data because of how large it is.

Where I was blocked: There was nothing that was really blocking me this week

#### Plans for next week:
- I plan to learn more about MongoDB
- Insert data into MongoDB

### Caitlyn Rawlings
#### Last Week's Goals:
- Make and share doc for architecture and design milestone
- Figure out what we are doing for frontend and review some react/JS

#### Progress and Issues:
What I did: Made frontend mockup. Worked on schedule/testing/documentation parts for architecture and design milestone.

What worked: Using template on figma instead of starting for stratch for design. Using requirements and group members ideas to determine what we need in the ui to deliver the functionality we want.

What I learned: How to use figma. Learned what we are using for recipe data + how we are planning on setting up architecture and design. 

Where I had trouble: Writing out schedule because it is difficult to estimate how long tasks will take and to determine what tasks will need to be completed to the specificity that was being asked for in the instructions.

Where I am blocked: Need to learn some expressJS so I can help with frontend

#### Plans for next week:
- work on incorporating ExpressJS calls into frontend functionality
- Work on developing README doc

### Jack Rosenbloom
#### Last Week’s Goals:
Last time my goal was to polish the mock website and connect with team members to discuss further design choices. This went very well, and I even realized that Aakanksh has prior experience with CSS and was able to offer some advice and/or guidance.
#### Progress and Issues:
What I did: Dove deeper into the realm of CSS, incorporating more essential parts into the website for the app. Additionally, I designed a logo on iPad and included it on the website and asked for team member input on the new design.
What worked: Using online resources made it simple to learn more advanced CSS and the general structure of CSS-based website design. Also asking for peers' thoughts allowed me to gain alternate perspectives on what design choices to use.
What I learned: I learned intermediate CSS, good practices for CSS as well as good style, more on scaling projects, in addition to some online tools for designing concepts and the workflow between iPad and CSS.
Where I had trouble: I finally began to meet some challenges this week, as venturing further into CSS brought general confusion, as well as a struggle to figure out organization and layout control. But perseverance was my friend.
Where I am blocked: I’m still not blocked yet. If I do get blocked, I plan to reconfigure with Aakanksh on CSS developmental strategies or reach out for assistance in other forms.
#### Plans for next week:
I plan to do some polishing work and also make more designs and maybe font reworks for the logo. I was told that’s probably the best thing I can do as the UI guy since the other’s are focused on implementing the basics together to support a command line beta.

### Aakanksh Yadav
#### Last Week's Goals:
- Finalize the data format to use to have our front and back end communicate (with the people that will be working on the back end)
- Look into ReactJS and any other frontend options so that I can decide on which to use and learn any skills I may need for this project
- Help backend developers with any work they may need to do for setting up the MongoDB database, etc.

#### Progress and Issues:
What I did: I contributed a lot to the first 2 sections of the architecture and design document; I also went through and made any edits in the contents of the document to reflect changes in our plans over the course of this last week; I helped with the risk analysis section of part 3; I looked into a number of services that we could use for our current plan (as far as hosting our front and back ends goes) and suggested alternatives to the MongoDB-based design when we had reason to worry about the scope of the project getting too big (although we haven't made any changes to our architecture right now, the research I did could come into use later depending on how progress goes); I helped research how a MERN database works and helped the backend developers get a clearer idea of what they will have to work on next; I researched a bit about frontend technologies that we may use but I will have to look into that more

What worked: Frequent communication, as always, was very helpful and an effective way of getting a more holistic view on how our project is panning out (and what decisions we will have to make next regading our system's architecture); researching independently and getting a good idea of what all of the tools that we are thinking of using can fully do has been quite enlightening (and is helping frame how exactly I am going to construct the frontend when things come to that)

What I learned: I learned about what the MERN stack is; I learned what a REST API is and why we may need that in the current design for our project; I learned what search indexing services are (and why that could be a component in an 'idealized' version of what we are making as it goes far beyond the scope of our project); I learned a bit more from the backend developers on our team about the difficulties that we might face due to the sheer size of the dataset that we are using in our backend

Where I had trouble: I have been struggling a bit with understanding what a reasonable scope for our project might be as a key part of it is making the project scalable (even if we don't actually implement the harder and bigger-scale goals); I have been researching the architecture a lot and it has been a bit overwhelming to pick one without spending an absurd amount of time getting to know each one

Where I am blocked: Since frontend work depends quite a bit on the backend work, I have had to wait a bit for the backend work to progress before I can start building my frontend around it. This is an understandable block but, considering the fact that I feel like there might be a lot of work that will have to go into the frontend, it is a bit stressful

#### Plans for next week:
- Research ReactJS more and how I may be able to use it to implement some of the more complex components of our project
- Research ExpressJS more in detail so that I can maybe start working around it as I construct the frontend (while the backend is being finished)
- Start designing a search algorithm as soon as the data format for the backend is decided upon
- Help with making a mock version of the website
