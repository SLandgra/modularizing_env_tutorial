require('dotenv').config()
const obj = require('./env_vars.js');
console.log(obj.add(1,6));
console.log(obj.name)
const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.env.PASSWORD;
console.log(password)
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

