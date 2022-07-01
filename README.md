# mongolian-api

  
  [![license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

 
  
  ## Technologies
  ![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/mongoose-js-4EA94B?style=for-the-badge&logo=mongoose&logoColor=red)


  ## Description 
  User Story:
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
  
uses mongoose schema virtuals for friend count and reaction counts.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  prerequisites: node.js, mongoDB, insomnia. <br>
  clone/fork repo then seed db using terminal command "npm i" to install dependencies in package.json. Once completed terminal command "npm run seed" to seed MongoDB database.
  start server "npm start" 

  ## Usage 
  use insomnia to test api endpoints: <br>
  API Routes<br>
  /api/users<br>
  /api/users/:userId/friends/:friendId<br>
  /api/thoughts<br>
  /api/thoughts/:thoughtId/reactions<br>

  check out a demo video [HERE](https://drive.google.com/file/d/1eGOe4EyKmR_FRP6D-AyjtJMPIa-t-OGN/view) 

  ## Contributions
  n/a


  ## Questions 
  
  Feel free to contact me at jgault87@gmail.com 
  you can also visit my [GitHub](https://github.com/jgault87) profile.
  






