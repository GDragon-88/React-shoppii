const jwt = require("jsonwebtoken");
const {getSessionValue} = require("../module/home.model")
module.exports.isAuth =async(req,res,next)=>{
    let sessionId = req.body.value
    let [data] = await getSessionValue(sessionId)
    let  token =JSON.parse( data[0].data)
    console.log(token);
    req.token = token.token
       next()
}  