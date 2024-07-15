import React from "react";
import { useLightMode } from "./ModeContext";
import Title from "./Title";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Chartcnt() {
  const { isLightMode } = useLightMode();
  const option = {
    elements: {
      //데이터 속성.
      line: {
        borderWidth: 2,
        borderColor: "rgba(255, 99, 132, 1)",
      },
      //데이터 꼭짓점.
      point: {
        pointBackgroundColor: "rgba(50, 115, 208, 1)",
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1,
          display: false,
        },
        grid: {
          color: "rgb(100, 100, 100)",
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 18,
            weight: "700",
            family: "Pretendard",
          },
          color: "rgba(50, 115, 208, 1)",
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
    plugins: {
      legend: {
        display: false,
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 0,
    },
  };
  const data = {
    labels: [
      "프론트엔드가 될래요",
      "벌레",
      "귀여운 것",
      "논리",
      "성실함",
      "계획성",
      "꼼꼼함",
      "내향성",
      "손재주",
    ],
    datasets: [
      {
        label: "It's me",
        data: [10, 1, 10, 8, 9, 10, 7, 9, 8],
        backgroundColor: "rgba(142, 208, 243, 0.5)",
        borderColor: "rgba(50, 115, 208, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div id="chart" className={"subject_wrap " + (isLightMode ? "light" : "dark")}>
      <Title title={"한 눈에 보는 나"} />
      <Radar data={data} options={option}></Radar>
    </div>
  );
}

export default Chartcnt;
