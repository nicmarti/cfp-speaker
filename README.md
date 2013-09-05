![Build status](https://devoxx.ci.cloudbees.com/job/cfp-speaker/badge/icon)

# Devoxx France web site and Call For Paper application

This is the main Devoxx France web site content, and the CFP application.

This application can be used to handle CFP requests, targeted at the Devoxx REST interface v2.

Used technologies:
- HTML5
- AngularJS
- Angular-UI
- Underscore.JS
- Bootstrap.JS
- Karma
- Grunt
- Bower
- NodeJS
- IstanbulJS

#Setup global env

- Install [nodejs] [http://nodejs.org/]
- It comes with [npm] [2]
- Have a look to [yeoman] : it helps to scallfold an angular project with best practices
- once npm has been installed, install yeoman, angular generator and some other required nodejs tools with sudo:
```
sudo npm install -g yo 
sudo npm install -g grunt-cli bower generator-angular generator-karma
```

Note: for grunt on MacOSX I had to update the PATH...

# Git
- checkout from Git the cfp-speaker project


#Setup project env
- cd cfp-speaker
- npm install && bower install
 - *npm install* is configured with **package.json** and generates the directory **node_modules**
 - *bower* is configured with **bower.json** or **bower.json** and generates the directory **app/components**
- install also compass 
```
npm install grunt-contrib-compass --save-dev
```

##Starts your application##

- grunt server
 - *grunt* is configured with **Gruntfile.js**

##Build your app, including testing and optimization##

 - grunt
 
##Build static files

 - grunt static
 - This will create all the static files like speakers, schedule etc in the /dist directory

##Update your project's dependencies##
- bower update
 - it update **app/components** directory

##Update your project's build dependencies##
- npm update
 - it update **node_modules** directory

## How to deploy on CloudBees

- go to the cfp-speaker folder
- prepare a dist
```
grunt --force
```
- add a dist/main.js file for Jenkins (after the grunt build):
```
sed 's/8000/process.env.PORT/g' web-server.js > dist/main.js
```
- launch the Cloud bees deploy command
```
nicolas@macbook (master):~/Dev/CloudBees/cfp-speaker> bees app:deploy dist  -ep eu
Enter application ID (ex: account/appname) : devoxx/devoxx.fr
Deploying application devoxx/devoxx.fr (environment: ): deploy.zip
........................uploaded 25%
........................uploaded 50%
........................uploaded 75%
........................upload completed
deploying application to server(s)...
Application devoxx/devoxx.fr deployed: http://devoxx.fr.devoxx.eu.cloudbees.net
```


[![Built on CloudBees](http://www.cloudbees.com/sites/default/files/Button-Built-on-CB-1.png)](https://devoxx.ci.cloudbees.com/job/cfp-speaker/)

TODO: Temporary switched to unstable version because of bug in $http
See: https://github.com/angular/angular.js/commit/79af2badcb087881e3fd600f6ae5bf3f86a2daf8#commitcomment-2367611
"angular": "~1.0.7",
