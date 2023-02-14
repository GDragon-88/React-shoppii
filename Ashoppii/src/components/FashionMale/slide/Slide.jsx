import './style.css'
export function Slide(){
    const url = ["https://cf.shopee.vn/file/vn-50009109-05b2cac9e8bfdb54c03a199a7367a371",
                "https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9",
                "https://cf.shopee.vn/file/vn-50009109-05b2cac9e8bfdb54c03a199a7367a371"]
    return (<div className="slide-fashion-male">
        <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
{url.map((i, index) => ( <div className="carousel-item active" key={index}>
      <img src={i} className="d-block w-100" alt="..." />
    </div>))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>)
}