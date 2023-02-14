
const jwt = require("jsonwebtoken")


const {getAllUser} = require("../module/register.model")
const bcrypt = require('bcryptjs');
module.exports.findUser =async(req,res)=>{
    const [data] =  await getAllUser() ;
    const result = data.find((i)=>{if(i.email==req.body.email && bcrypt.compareSync(req.body.password, i.password)){
        return i
    }})
    var token = jwt.sign(result, 'chien2811');
    req.session.token  = token;
    res.json({value:req.sessionID})
}