import "./style.css"
import { Checkbox } from 'antd';
import { Rate } from 'antd';
import { useState } from 'react';
export function ListAll() {
    const listItem = [
        "Áo Khoác",
        "Áo Vest và Blazer",
        "Áo Hoodie, Áo Len và Áo Nỉ",
        "Quần Jeans",
        "Quần Dài & Quần Âu",
    ]
    const listItem2 = [
        "Áo thun (683k+)",
        "Áo khoác (185k+)",
        "Hoodie & Áo nỉ (165k+)",
        "Áo sơ mi (162k+)"]
    const checkBox = [
        "Hà Nội",
        "TP.Hồ Chí Minh",
        "Quận Hà Đông",
        "Quận Hoàng Mai"
    ]
    const checkBox2 = [
        "Hỏa Tốc",
        "Nhanh",
        "Tiết Kiệm "]
    const checkBox3 = [
        "COOLMATE",
        "AVIANO",
        "VICENZO",
        "ZERO"
    ]
    const checkBox4 = [
        "Shoppe Mall",
        "Shoppe Yêu Thích",
        "Shoppe Yêu Thích +"
    ]
    const checkBox5 = [
        "Đã Sử Dụng",
        "Mới"
    ]
    const checkBox6 = [
        "0% TRẢ GÓP"
    ]
    const checkBox7 = [
        "Freeship Xtra",
        "Hoàn xu Xtra",
        "Đang giảm giá",
        "Miễn phí vận chuyển"
    ]
    const [value] = useState(5);
    const [value2] = useState(4);
    const [value3] = useState(3);
    const [value4] = useState(2);
    const [value5] = useState(1);
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);

    };
    const desc = ['Tệ', 'Rất Tệ', 'Tốt', 'Rất    Tốt', 'Tuyệt Vời'];
    return (<div className="listall-product">
        <div className="all">
            <i class="fa-solid fa-bars"></i>
            <span className="span1">TẤT CẢ DANH MỤC</span>
        </div>
        <div className="fashion">
            <p className="shop-man">Thời Trang Nam</p>
            {listItem.map((i, index) => (
                <span key={index}>{i}</span>
            ))}
        </div>
        <div className="listall-filter">
            <i class="fa-duotone fa-filter"></i>
            <span className="span1">BỘ LỌC TÌM KIẾM</span>
        </div>
        <div className="fashion2">
            <p>Theo Danh Mục</p>
            {listItem2.map((i, index) => (
                <span key={index}>{i}</span>
            ))}
        </div>
        <div className="listall-filter2">
            <p>Nơi Bán</p>
            {checkBox.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter3">
            <p>Đơn Vị Vận Chuyển</p>
            {checkBox2.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter4">
            <p>Thương Hiệu</p>
            {checkBox3.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter4">
            <p>Khoảng Giá</p>
            <input className="listall-input" type="text" />
            <input className="listall-input2" type="text" />
            <button >ÁP DỤNG</button>
        </div>
        <div className="listall-filter5">
            <p>Loại Shop</p>
            {checkBox4.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter6">
            <p>Tình Trạng</p>
            {checkBox5.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter7">
            <p>Các lựa chọn thanh toán</p>
            {checkBox6.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter8">
            <p>Đánh giá</p>
            <div className="star1">
                <Rate tooltips={desc} value={value} />
            </div>
            <div className="star2">
                <Rate tooltips={desc} value={value2} />
            </div>
            <div className="star3">
                <Rate tooltips={desc} value={value3} />
            </div>
            <div className="star4">
                <Rate tooltips={desc} value={value4} />
            </div>
            <div className="star5">
                <Rate tooltips={desc} value={value5} />
            </div>

        </div>
        <div className="listall-filter9">
            <p>Dịch Vụ & Khuyến Mãi</p>
            {checkBox7.map((i, index) => (
                <Checkbox onChange={onChange}>{i}</Checkbox>
            ))}
        </div>
        <div className="listall-filter9">
            <button>XÓA TẤT CẢ</button>
        </div>
    </div>)
}