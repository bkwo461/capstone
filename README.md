# capstone-project-team-16
Cloud Engine (Team 16) with Project 7

## Frontend (Next.js)




## Backend (Express.js)
- Run using ``npm run devStart`` to test on the go without having to restart server every time you change something
- Basic Route system has been implemented
- In the future: implement better design, such as repository pattern

### Backend repository convention
>api # only add index.js which will replace server.js before deployement
>config # system and environment configuration
>middleware # middleware, and sub layer functions
>models # mongo db schemas and models
>routes # api end point routers 
>.env  # environement variable not for commit 
>server.js # initial server starter
