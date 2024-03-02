const jwt=require("jsonwebtoken");
const User=require("../DB/model/user");


const auth=async(req,res,next)=>{
    // console.log(req.headers.key);
    try{
        let verify=jwt.verify(req.headers.key,process.env.SECRET_KEY);
        if((await User.find({email:verify.email}))){
            req["isAdmin"]=verify.isAdmin;
            req["email"]=verify.email;
            req["id"]=verify.id;
            next();
            return;
        }
        res.status(401);
        res.json({data:"user does not exist"});
    }
    catch(err){
        res.status(401);
        res.json({data:"invalid user"});
    }
}

module.exports=auth;