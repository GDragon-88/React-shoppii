import "./style.css"

export function ListAll() {
    const listItem = ["Thời Trang Nam",
        "Áo Khoác",
        "Áo Vest và Blazer",
        "Áo Hoodie, Áo Len và Áo Nỉ",
        "Quần Jeans",
        "Quần Dài & Quần Âu",
        "Thêm"]
    return (<div className="listall-product">
        <div className="all">
            <i class="fa-solid fa-bars"></i>
            <span>TẤT CẢ DANH MỤC</span>
        </div>
        <div className="fashion">
            {listItem.map((i, index) => (
                <span key={index}>{i}</span>
            ))}
        </div>
        <div className="listall-filter">
            <span>BỘ LỌC TÌM KIẾM</span>
        </div>



    </div>)
}