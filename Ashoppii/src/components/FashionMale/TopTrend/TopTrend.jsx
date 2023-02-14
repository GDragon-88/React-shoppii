import "./style.css"
export function TopTrend() {
    const url = [{ url: "https://cf.shopee.vn/file/3854ad0615cfa2d15eb06a446816465d", name: "FREESHIP", price: 2000 },
        { url: "https://cf.shopee.vn/file/f05c3231cb59b6d0c233db3ea7a30b8f", name: "SHOP XU HƯỚNG", price: 1000 },
        { url: "https://cf.shopee.vn/file/40ccf6a1162d77a99cd703885034d631", name: "HÀNG QUỐC TẾ", price: 5000 },
        { url: "https://cf.shopee.vn/file/19b560edefa4b6869c0eac2f979c9f64", name: "SHOPEE MALL", price: 7000 },
        { url: "https://cf.shopee.vn/file/f4499fa8d8fec743f8d8b2e63a973e79", name: "SHOP HÀNG XƯỞNG", price: 6500 }]

    return (<div className="trend">
        <div className="trend-text">
            <p>SIÊU SHOP THỊNH HÀNH - BUNG DEAL SẢN PHẨM</p>
        </div>
        <div className="trend-top">
            {url.map((i, index) => (
                <div className="trend-item" key={index}>
                    <img src={i.url} alt="" />
                    <div className="trend-item-text">
                        {i.name}
                    </div>
                    <div className="trend-item-price">
                        {i.price}
                    </div>
                </div>

            ))}
        </div>
    </div>
    )
}