//dotenv takes your .env file and puts those variables into the
//process.env referenced by what the variable name is
//In this case we put in PASSWORD='not_bacon'
require('dotenv').config()

//Here we can see that we're accessing that password from our
//.env file through process.env.PASSWORD
//Normally the .env file is protected by the .gitignore file
//so that your passwords and api keys are safe
const password = process.env.PASSWORD;
console.log(password)

//Requiring env_vars.js is allowing us to use what we defined
//in module.exports in that file. You can see that the .add
//Method and the .name value are not defined in this file, but
//can be used because of module.exports
const obj = require('./env_vars.js');
console.log(obj.add(1,6));
console.log(obj.name)

//Node packages can also be referenced using require, in this case
//bcrypt. Bcrypt is an awesome package that I think you should
//check out and use in your own apps!
const bcrypt = require('bcrypt');
const saltRounds = 10;

//All this code can be found and understood from the npm package
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        if(err){
            console.log(err);
        }else{
            console.log(password);
            console.log(hash);
        }
        bcrypt.compare('password', hash, function(err, res) {
            console.log(res);
        });
    });
});

