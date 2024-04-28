import React from "react";
function BookPage({ data }) {
  
  // time 원하는대로 보이기
  const stringTime = data.time;
  const day = stringTime.toDate();
  let year = day.getFullYear();
  let month = ('0' + (day.getMonth() + 1)).slice(-2);
  let days = ('0' + day.getDate()).slice(-2);
  let dateString = year + '.' + month + '.' + days;

  return (
    <div className="content">
      <div>
        <p className="name">{data.name}</p>
        <p className="text">{data.detail}</p>
      </div>
      <p className="day">{dateString}</p>
    </div>
  );
}

export default BookPage;