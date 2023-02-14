const {getAllUser} = require("../module/register.model")
const bcrypt = require('bcryptjs');
module.exports.findUser =async(req,res)=>{
    const [data] =  await getAllUser() ;
    const result = data.find((i)=>{if(i.email==req.body.email && bcrypt.compareSync(req.body.password, i.password)){
        return i
    }})
    console.log(req.body);
    console.log(result);
    console.log("hello", req.session);
    // req.session.isAuth = result.id 
    res.json("ok")
} 