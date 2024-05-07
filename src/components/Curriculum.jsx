import React from "react";
import Profile from "../assets/img/profile.jpg";
import Title from "./Title";

function Curriculum() {
  return (
    <div id="curriculum_wrap">
      <Title title={"프로필"} />
      <div className="detail_wrap">
        <div className="profile_img">
          <img src={Profile} alt="프로필사진" />
        </div>
        <div className="info_list">
          <div className="career">
            <h2>경력</h2>
            <ul>
              <li className="name">스피드옥션</li>
              <li className="day">23.05.04 ~ </li>
              <li className="job">퍼블리셔, 웹디자인</li>
            </ul>
          </div>
          <div className="tool">
            <h2>Tool</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>Github</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>미리캔버스</li>
            </ul>
          </div>
          <div className="certificate">
            <h2>자격증</h2>
            <ul>
              <li>SQLD(23.10)</li>
              <li>정보처리산업기사(23.09)</li>
              <li>GTQ 포토샵 1급(22.09)</li>
              <li>GTQ 일러스트 1급(22.05)</li>
            </ul>
          </div>
          <div className="study">
            <h2>Study</h2>
            <ul>
              <li>코드잇 react 강의</li>
              <li>코드잇 js강의</li>
              <li>
                그린컴퓨터아트학원<br/>(기업요구를 반영한 디지털 비즈니스
                웹앱(UIUX)디자인 & 개발자 양성과정)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
