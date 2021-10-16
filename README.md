

# GA Overflow - Readme

We created a fullstack application with CRUD operations for General Assembly students, graduates and tutors to share and exchange advice about the course and coding.  


## Description

The website was designed to provide a space for General Assembly students and alumni to share advice about coding and careers and to ask others working on the course for help. The site uses a blog style format for logged in users to publish posts and comment on posts from others. 

The application has the following features: 

* Write and publish blog with title, summary, text, images
* Display blogs in order of the most recently published
* Add comments to blogs
* Edit and delete blog posts
* Register a new user and login and logout
* Search function for blog titles, summaries and text

We developed the fullstack application using MERN stack, with the following technologies: 

* MongoDB - document database for holding the blog post and user data
* Express(.js) - web application framework for Node.js 
* React(.js) - client-side JavaScript framework
* Node(.js) - JavaScript web server

![Image of MERN stack](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress)

### App images

Homepage 

![Homescreen](https://gcdn.pbrd.co/images/Mn6vSeePTD49.png?o=1)


## Getting Started

You will need to check you have [node.js](https://www.codecademy.com/articles/react-setup-i) and [Express](https://expressjs.com/en/starter/installing.html) installed before the application will run. Following the linked installation guides.

### Installing

There are two GitHub repos for the application: 

Front end - [https://github.com/neilmurcho13/GA-overflow-client](https://github.com/neilmurcho13/GA-overflow-client)
Back end - [https://github.com/neilmurcho13/GA-overflow-backend](https://github.com/neilmurcho13/GA-overflow-backend)

### Dependencies

The following dependencies will be install automatically using the following command:
```
npm install
``` 

#### Client app 
* Bcrypt
* Cors
* Dotenv
* Express
* Jsonwebtoken
* Mongoose
* Mongoose-hidden
* Mongoose-unique-validator
* Babel-eslint 


#### Backend app 
   * babelcore 
   * babel/plugin-transform-runtime
   * babel/preset-env
   * babel/preset-react 
   * babel-loader 
   * css-loader
   * dotenv-webpack 
   * file-loader 
   * html-webpack-plugin
   * sass
   * sass-loader
   * style-loader
   * webpack
   * webpack-cli
   * webpack-dev-server

### Executing program

Both the client and the database need to be running at the same time. 
The backend runs on port 3000.  

#### Backend

First seed the data if you are running outside of MongoDB:
```
yarn seed
```

Once the data has been seeded, you can run the server: 
```
yarn start
```


#### Client

Express server runs on port 8001. 

Run from inside the client folder
```
yarn start:client
```


## Help

- [ ] Check there are not  servers running on port 3000 or port 8001 by closing other Terminal /command line windows and code editors. 

```
command to run if program contains helper info
```


## Authors
Dominic Jonas
Kimberley Salter
Neil Murchison

#

ENDEND 
# GA Overflow - Readme

We created a fullstack application with CRUD operations for General Assembly students, graduates and tutors to share and exchange advice about the course and coding.  


## Description

The website was designed to provide a space for General Assembly students and alumni to share advice about coding and careers and to ask others working on the course for help. The site uses a blog style format for logged in users to publish posts and comment on posts from others. 

The application has the following features: 



* Write and publish blog with title, summary, text, images
* Display blogs in order of the most recently published
* Add comments to blogs
* Edit and delete blog posts
* Register a new user and login and logout
* Search function for blog titles, summaries and text

We developed the fullstack application using MERN stack, with the following technologies: 

* MongoDB - document database for holding the blog post and user data
* Express(.js) - web application framework for Node.js 
* React(.js) - client-side JavaScript framework
* Node(.js) - JavaScript web server

![Image of MERN stack](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress)

## Getting Started


### Dependencies

You will need to check you have [node.js](https://www.codecademy.com/articles/react-setup-i) and [Express](https://expressjs.com/en/starter/installing.html) installed before the application will run.

The application uses the following dependencies:  

Client app 
* Bcrypt
* Cors
* Dotenv
* Express
* Jsonwebtoken
* Mongoose
* Mongoose-hidden
* Mongoose-unique-validator
* Babel-eslint 


Backend app 


   * babelcore 
   * babel/plugin-transform-runtime
   * babel/preset-env
   * babel/preset-react 
   * babel-loader 
   * css-loader
   * dotenv-webpack 
   * file-loader 
   * html-webpack-plugin
   * sass
   * sass-loader
   * style-loader
   * webpack
   * webpack-cli
   * webpack-dev-server



### Installing

The GitHub repos for the application are available: 

Front end - [https://github.com/neilmurcho13/GA-overflow-client](https://github.com/neilmurcho13/GA-overflow-client)

Back end - [https://github.com/neilmurcho13/GA-overflow-backend](https://github.com/neilmurcho13/GA-overflow-backend)


### Executing program

Both the client and the database need to be running at the same time. 

The backend runs on port 3000.  

Client - run from inside the client folder

```
yarn start:client
```

Backend 

```
yarn start
```


* How to run the program
* Step-by-step bullets


```
code blocks for commands
```



## Help

Any advise for common problems or issues.


```
command to run if program contains helper info
```



## Authors

Contributors names and contact info

ex. Dominique Pizzie

ex. [@DomPizzie](https://twitter.com/dompizzie)


## Version History



* 0.2
    * Various bug fixes and optimizations
    * See [commit change](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc) or See [release history](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
* 0.1
    * Initial Release

## License


This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details


## Acknowledgments

Inspiration, code snippets, etc.



* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
