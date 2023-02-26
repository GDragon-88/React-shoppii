const {getAllProduct} = require ("../module/search.model")


module.exports.getDataSearch =async(req,res)=>{
    let value = req.body.value
    const [dataProduct] = await getAllProduct()
    const result = dataProduct.filter(i=>i.name.includes(value))
    res.json(result)
} 