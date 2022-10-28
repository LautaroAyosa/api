# Welcome to IMPDb (Internet Movie-People Database)
This is a Full Stack project created mainly with React, SQL, Sequelize, Express, Axios, SASS and Redux.
It's a simple website application to show that I can work with an SQL Database.

If you are interested in an Application with a Non-relational DataBase like MongoDB you can check [this other project](https://github.com/LautaroAyosa/BlogList).

## Quick Start:
1. Download the repository. <br>
Go to the green "Code" button and select "Download Zip" or clone it with `$git clone https://github.com/LautaroAyosa/IMPDb.git`.
#### Backend
2. Run `$npm install` inside the `/api` folder.
3. Run `$npm run dev` inside the folder `/api` to start a dev server with nodemon.
#### Frontend
4. Run `$npm install` inside the `client` folder.
5. Run `$npm start` to start the application.<br>
6. Try the app! <br>
You can do that with an application like "Postman" making calls to the api, or with the files inside the folder `/api/request` by opening the files on "Visual Studio Code" and clicking "send request".

## Task:
Create the following models using Sequelize

### 1. Person
A person can have multiple roles in different movies (Actor/Actress, Director, Producer) and can have more than 1 rol in the same movie (Be an actor and director, for example).
```
Person: {
    -Id
    -Name
    -Last Name
    -Age
    -[Movies as Actor/Actress]
    -[Movies as Director]
    -[Movies as Producer]
}
```

### 2. Movie
```
Movie: {
    -Id
    -Title
    -Year
    -[Casting (Actors+Actresses]
    -[Directors]
    -[Producers]
}
```

## Next Features:
- [ ] Create filters
- [ ] Create a Home Page
- [ ] Update Movie on Redux store after a Person is modified, and vice versa.