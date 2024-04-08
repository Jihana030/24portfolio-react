import cardImg from "../assets/img/menucard06.png";

function CardList() {
  //마우스오버 되면 dis-none이 사라지도록
  const className = `card_explan `;
  return (
    <div className="card_wrap">
      <a href="" className="card">
        <p className="card_title">해리포터</p>
        <img src={cardImg} alt="카테고리카드" />
      </a>
      <div className={className}>
        <ul></ul>
      </div>
    </div>
  );
}

export default CardList;
