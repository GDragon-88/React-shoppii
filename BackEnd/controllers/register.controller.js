const {getAllUser,addUser} = require("../module/register.model");
const { uuid } = require('uuidv4');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(5);

module.exports.addOneUser = async(req,res)=>{
    
    console.log(req.body);
    const [allUser ] = await getAllUser()
    const result = allUser.filter((i=>i.email==req.body.email))
    const hash =  bcrypt.hashSync(req.body.password, salt);
    if(result.length == 0){
      await  addUser(req.body.email,hash).then(()=>{ 
            res.json("success") 
      }).catch(err=>console.log(err))
    }else{ 
        res.json("tai khoan toon tai")
    }
}