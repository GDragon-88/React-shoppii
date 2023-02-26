
const {getSessionValue} = require("../module/home.model")
module.exports.isAuth =async(req,res,next)=>{
    let sessionId = req.body.value 
    if (sessionId){
        let [data] = await getSessionValue(sessionId)
        let  token =JSON.parse( data[0].data)
        req.token = token.token
        next()
    }else{
        res.json({mess:"ban chua dang nhap"})  
    }  
}   