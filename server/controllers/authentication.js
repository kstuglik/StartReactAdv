
const User = require('../models/user');

exports.signup = function(req,res,next){
    console.log(req.body);
    const email = req.body.email;
    const pass = req.body.pass;
    // see if user with given email exist and take an action

    User.findOne({email:email},function(err,existingUser){
        if(err){return next(err);}
        if(existingUser){
            return res.status(422).send({error:'Email is in use'});        }

        const user = new User({
            email:email,
            pass:pass
        });

        user.save(function(err){
            if(err){return next(err);}
            res.json({succes:true});
        });
    });

}