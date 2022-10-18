# AllCareOrg
A <i>Web Application</i> made for donation,charity and volunteering.This app allows a person either to be a volunteer and work on field 
or donate money in the categories mentioned on the index page.They can see how much nomey and work done,which is stored in databse.

### Built With

<p>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="cplusplus" width="40" height="40"/> </a>
</p>


<h3>Collaborators</h3>

[Javesh Lodha](https://github.com/javesshhh)

[Shriyansh Lohiya](https://github.com/07shreyansh)

[Nagendra Kumar](https://github.com/nk-31012002)

[Devendra Kayande](https://github.com/MysticShadow427)


## Pre-Requisites

1. Any IDE (eg. VS Code , Sublime etc).
2. Node JS
3. NPM Installer

## Instructions

- You can clone the repository

  1. Make sure your machine is having internet connection.
  2. Open shell (which ever your OS support) on your PC.
  3. Change drive to the location where you want your project to be copied
  4. Now type or copy-paste the below given commands.
    ```
      https://github.com/MysticShadow427/AllCareOrg
    ```
  5. Press Enter and the project will be cloned in you system.

- You can directly download the zip file and extract it

**After extracting the zip file or after cloning the repository**

Open the server.js folder and a terminal in it.
Run npm start to start server on your local host and port 3000.

## Brief Project Structure

```
/
-- assets/		
    |-- html/
        |-- index.html            #First webpage of the project
        |--signin.html            #signin page
        |--form.html              #volunteer form
    
        |-- img/               #Contains images used in the project
        |-- css/              #Contains all ss fyles
        |-- js/                #Contains client side js code
            
|    
|-- server/
    |-- controller/          #Contains all the controllers of project
        |-- usercontroller.js   #Contains all the functions related to user/donator
        |-- volcontroller.js  #Contains all the functions related to volunteer     
    |-- database/            #To establish connection between database and backend
    |-- route/               #Contains all routes used in project
    |--models/               #Contains all mongoose models for users and volunteers
    |--services/             #Contains the rendering of routes
    |--emails/               #Contains the email sending code
    |--views/                #Contains all .hbs files to render dynamic content on the webpage
|-- server.js            #Main file of server folder
``


## APIs

| Routes | parameters | body | Description |
| -------- | -------- | -------- | -------- |
| `POST` /donate-now | | name ,email,category,amount | Allows admin to add donater's name,email,amount and category donated in database and send the email |
| `POST` /volunteer-now | | name ,email,category | Allows admin to add voluntee's name,email and ateory to work for in database and send email to that person|
| `GET` /donate | | | Returns the form for donate page |
| `GET` /volunteer| | | Returns the form for volunteer page |
