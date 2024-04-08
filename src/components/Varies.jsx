import { useState } from 'react';
import cardImg from '../assets/img/menucard06.png';

/*
  카드 애니메이션용 클래스 추가 삭제 필요. 
  뭘 기준으로 true, false를 줄 것인가.

  card_wrap이 map으로 반복생성 되어야 함. 
*/

function CardList( ){
  //마우스오버 되면 dis-none이 사라지도록
  const className = `card_explan `;
  return(
    <div className="card_wrap">
      <a href="" className="card">
        <p className="card_title">해리포터</p>
        <img src={cardImg} alt="카테고리카드" />
      </a>
      <div className={className}>
        <ul>
          
        </ul>
      </div>
    </div>
  )
}

function Varies(){
  const [card, setCard] = useState([]);
    return (
      <div className="subject_wrap">
        <CardList/>
      </div>
    )
}

export default Varies;