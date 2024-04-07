import cardImg from '../img/menucard06.png';

/*
  카드 애니메이션용 클래스 추가 삭제 필요. 
  뭘 기준으로 true, false를 줄 것인가.

  card_wrap이 map으로 반복생성 되어야 함. 
*/

function Varies(){
    return (
      <div className="subject_wrap">
        <div className="card_wrap">
          <a href="" className="card">
            <p className="card_title">해리포터</p>
            <img src={cardImg} alt="카테고리카드" />
          </a>
          <div className="card_explan dis-none">
            <ul>
              <li>학원 마지막 프로젝트</li>
              <li>1등으로 수료</li>
              <li>역사, 교수소개, 연혁 작업</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Varies;