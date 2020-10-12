const mongose = require('mongoose');
const Schema = mongose.Schema;


// Define model
const userSchema = new Schema({
    email: {type:String, unique:true,lowercase:true},
    pass: String
});

// create the model class
let  ModelClass = mongose.model('user',userSchema);

// export the model
module.exports = ModelClass;