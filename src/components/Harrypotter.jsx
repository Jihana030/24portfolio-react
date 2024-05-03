import React from "react";
import Title from "./Title";
import harryMain from "../assets/img/harry_main.png";
import harryIntro from "../assets/img/harry_intro.png"
import harryProfessor from "../assets/img/harry_professor.png"
import harryHistory from "../assets/img/harry_history.png"

function PageImage({ src, alt }) {
  return (
    <div className="harry_img">
      <img src={src} alt={alt} />
    </div>
  );
}

function PageDetail({ title, detail, href }) {
  return (
    <div className="detail_wrap">
      <div className="title">
        <h3>{title}</h3>
        <a href={href} className="arrow_wrap">
          보러가기
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="detail">
        <pre>{detail}</pre>
      </div>
    </div>
  );
}

function Harrypotter() {
  const mainConcept = `이 페이지는 해리포터에 나오는 학교 '호그와트'의 홈페이지를 만든 것입니다. 
저를 포함한 팀원 4명 모두 해리포터를 좋아하여 시작하게 된 프로젝트로 호그와트의 학생이 되면 어떤 홈페이지가 필요할지 설문조사를 거쳐 의견을 모아 제작하게되었습니다. 저희는 프론트 수업을 들었지만, 컴공과인 친구가 백엔드를 해주어 잠시나마 백엔드와 협업하는 경험을 해 볼 수 있었습니다.
마법학교답게 페이지 곳곳에 숨은 마법적 요소를 찾아보세요!`;
  const subConcept01 = `학교 홈페이지에는 학교의 연혁이 꼭 있죠. 레퍼런스를 찾아보며 가로스크롤로 연혁이 나오는 것이 멋있어보여서 도전해본 페이지입니다.
가로 스크롤이라는 것이 생각보다 쉽게 이루어지는게 아니란 점이 신기하고 고통스러운 부분이었습니다. 또 그만큼의 성취감도 따라왔습니다.`;
  const subConcept02 = `영화 해리포터에는 다양한 교수님이 나옵니다. 각 교수의 과목과 기숙사, 이름을 카드형식으로 레이어드해서 마우스 움직임에 따라 보여주고 있습니다.
영화에서처럼 벽에 액자가 잔뜩 걸려있는 디자인을 생각하였습니다.`;
  const subConcept00 = `호그와트는 마법사들만 열차를 타고 갈 수 있습니다. 이처럼 머글은 들어올 수 없는 세계관을 구현하기 위해 도입에 키워드를 입력해야 열리도록 했습니다.
css 애니메이션을 이용해 문이 열리는 느낌을 주었고, 애니메이션이 끝나면 자연스럽게 홈페이지의 메인으로 이동할 수 있도록 코드를 짰습니다.
키워드에 관한 힌트는 링크바를 참고하세요.`;

  return (
    <div id="harry_wrap">
      <Title title={"학원 마지막 프로젝트 : 호그와트 홈페이지"} />
      <div className="harry_detail_wrap">
        <div className="harry_detail">
          <PageImage src={harryMain} alt={"호그와트 메인"} />
          <PageDetail
            title={"호그와트 홈페이지"}
            detail={mainConcept}
            href={
              "https://jihana030.github.io/Hogwarts_School/views/index.html"
            }
          />
        </div>
        <p>&#91; 담당한 페이지 &#93;</p>
        <div className="harry_detail">
          <PageImage src={harryIntro} alt={"호그와트 도입"} />
          <PageDetail
            title={"호그와트 도입"}
            detail={subConcept00}
            href={"https://jihana030.github.io/Hogwarts_School/"}
          />
        </div>
        <div className="harry_detail">
          <PageImage src={harryHistory} alt={"호그와트 연혁"} />
          <PageDetail
            title={"호그와트 연혁"}
            detail={subConcept01}
            href={
              "https://jihana030.github.io/Hogwarts_School/views/history.html"
            }
          />
        </div>
        <div className="harry_detail">
          <PageImage src={harryProfessor} alt={"호그와트 교수소개"} />
          <PageDetail
            title={"호그와트 교수소개"}
            detail={subConcept02}
            href={
              "https://jihana030.github.io/Hogwarts_School/views/professor.html"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Harrypotter;
