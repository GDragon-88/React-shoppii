
const jwt = require("jsonwebtoken")


const {getAllUser} = require("../module/register.model")
const bcrypt = require('bcryptjs');
module.exports.findUser =async(req,res)=>{
    const [data] =  await getAllUser() ;
    const result = data.find((i)=>{if(i.email==req.body.email && bcrypt.compareSync(req.body.password, i.password)){
        return i
    }})
    console.log(result);
    var token = jwt.sign(result, 'chien2811');
    console.log(token);
    req.session.token  = token;
    res.json({value:req.sessionID})
} 