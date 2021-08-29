# CRUD-APIs-in-NodeJS
CRUD APIs to demonstrate RBAC (role based access control) implemented with JWT and pagination in Node.js and using MongoDB

# Overview
 The Project has implementation of 
 * Authentication
 * Validation
 * Authorization
 * Role based access controls for CRUD APIs

# Setup and Usage
Simply clone the repository and enter the below commands <br/>
To install dependency use ```npm install``` <br/>
To start server use ```npm start```<br/>
<br/>

# Models
```User``` Model is kept for Authentication, Authorization and Validation purpose.<br/>
```Post``` Model for CRUD APIs

# API Flows
Import this [Postman collection](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/blob/main/AttainU.postman_collection.json) to view all important APIs<br/>
```api/auth/login``` and ```api/auth/signup``` are public endpoints<br/>
Rest all other CRUD endpoints can only be accessed via proving that a user is authenticated as well as authorized.
 * Normal User is allowed only to retrieve the Posts in MongoDB in paginated way (if they wish to), so as to handle huge no. of posts.
 * Admin can perform all CRUD operations on Posts document in mongoDB
When server is started Admin user is created by default if User collection is empty. Credentials for Admin user is as follows 
* Name : ```admin```
* email : ```admin@admin.com```
* password : ```admin```

# Folder overview
[validator](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/validator) : Has all necessary logic to validate the User Model fields.<br/>
[routes](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/routes) : Has all API endpoints and defines what middlewares should be used for a particular endpoint.<br/>
[model](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/models) : Has DB schema that is followed for collections throughout the project.<br/>
[middleware](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/middleware) : Has necessary logic to check authourization and access level of a particular user.<br/>
[controller](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/controllers) : Has the logic to handle the incoming request and perform the proper DB operations.<br/>
[config](https://github.com/xidddekate/CRUD-APIs-in-NodeJS/tree/main/config) : Has config for JWT secrets.


