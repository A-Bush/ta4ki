# Ta4ki

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Heroku deploy

```bash
 git clone https://github.com/A-Bush/ta4ki.git
 cd ta4ki
 git checkout -b <branch name>
 
 heroku login
 heroku create
 heroku addons:create mongolab:sandbox
 git add . 
 git commit -m 'start'
 git push heroku master
 heroku open  

```

### Test API

###### Windows
```bash
  # add user with POST
  curl -H "Content-type: application/json" -d "{\"name\":\"username\", \"email\":\"useremail\"}" http://<HEROKU_APP_ID>.herokuapp.com/api/users
  
  # delete user by id with DELETE
  curl -X DELETE http://HEROKU_APP_ID.herokuapp.com/api/users/<user_id>
  
  # update user by id with PUT 
  curl -H "Content-type: application/json" -X PUT -d "{\"name\" :\"ololo\"}"  http://<HEROKU_APP_ID>.herokuapp.com/api/users/<user_id>
  
  # get user by id with GET
  curl http://HEROKU_APP_ID.herokuapp.com/api/users/<user_id>
  
  # get all users
  curl http://HEROKU_APP_ID.herokuapp.com/api/users
  
```

##### UNIX
```bash
  # add user with POST
  # use normal ' and " mixing
  curl -H 'Content-type: application/json' -d '{"name":"username", "email":"useremail"}' http://<HEROKU_APP_ID>.herokuapp.com/api/users
    
```


### Some additions

Don't forget add missing dependencies 

```bash
  npm install
```

Rename `sample.env` to `.env` and add environment variables (or leave them by default)
Setup your development DataBase in `.env`

```bash
  MONGODB_URI=mongodb://localhost:27017
```

Create build

```
  ng build
```

- All compiled and NOT minified data now is in `./dist/` folder
- DO NOT change files in this folder

Start local server 

```bash
  npm start
```

Server is starting on `http://localhost:8080` or your HOST variable in `.env`

