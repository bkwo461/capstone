# capstone-project-team-16
Cloud Engine (Team 16) with Project 7
University of Auckland 2023 Semester 2 CS399


## Frontend
...


## Backend

Install the dependencies:

```bash
$ npm install
```

Use this command to autogenerate swagger UI endpoint documentations and run backend server using nodemon for easier debugging.

```bash
$ npm run start
```

### Backend repository convention
- api⠀⠀⠀⠀⠀⠀⠀⠀#⠀index.js will replace server.js on deployment
- config⠀⠀⠀⠀⠀⠀#⠀System & Environment Config
- middleware⠀⠀#⠀Middleware/sub layer functions
- models⠀⠀⠀⠀⠀#⠀Mongo db schemas and models
- routes⠀⠀⠀ ⠀⠀#⠀API Endpoint Definition
- .env ⠀⠀⠀⠀⠀⠀⠀#⠀Environment Variable used for dev (MONGODB_URI=\<LINK TO MONGO DB\>)
- server.js⠀⠀⠀⠀⠀#⠀Server config file
- 
<br><br>
* This project uses swagger-autogen to autogenerate Swagger API documentation. <br>
  Refer https://github.com/swagger-autogen/swagger-autogen
