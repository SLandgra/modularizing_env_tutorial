var name = process.argv[2];
//Module.exports allows you to export variables into other files
//In this case I'm exporting an object with an add method and a
//Key value pair of name
module.exports = {
    add: function(a,b){
        return a+b
    },
 
    name: name
}