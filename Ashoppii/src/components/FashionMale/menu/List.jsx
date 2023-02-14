import "./List.css"
export function List() {
    const url = ["https://cf.shopee.vn/file/513f589c10254512669d3d8b50a6dea7",
"https://cf.shopee.vn/file/5c1936f863ed34b0e77299b2dbb96365",
"https://cf.shopee.vn/file/573699fb35b480bae467c33e237bef2b",
"https://cf.shopee.vn/file/25f5e7c890cb12fe390cdebe899b1b9a",
"https://cf.shopee.vn/file/21c730c26e8d3a6fab107a6ea75c057a",
"https://cf.shopee.vn/file/29bed4380e5d22c19db3e70bdf852754",
"https://cf.shopee.vn/file/d1aa441638492fb588741d01af604811",
"https://cf.shopee.vn/file/63072c90d0ed6f1acdbc301f4e35f890",
"https://cf.shopee.vn/file/5ae4a69caf8172da365898519b0d6b17",
"https://cf.shopee.vn/file/f22e36c8526d9a2224cd8bdb4fc2fb60",
"https://cf.shopee.vn/file/0671ab96c0cfa1d4dd8908033b5dd4dc",
"https://cf.shopee.vn/file/ddc75185f9fb776d74e7483c4bea3187"]
    return (<div className="container">
       {url.map((i, index) => (
         <div className="container-item" key={index}>
         <img src={i} alt="" />
 </div>
       ))}
    </div>
    )
}
