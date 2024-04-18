
function BookPage({ data }) {
  
  const stringName = JSON.stringify(data.name);
  const stringDetail = JSON.stringify(data.detail);
  const stringTime = data.time;
  const day = stringTime.toDate();
  let year = day.getFullYear();
  let month = ('0' + (day.getMonth() + 1)).slice(-2);
  let days = ('0' + day.getDate()).slice(-2);
  let dateString = year + '-' + month + '-' + days;
  

  return (
    <div className="content">
      <div>
        <p className="name">{stringName}</p>
        <p className="text">{stringDetail }</p>
      </div>
      <p className="day">{dateString }</p>
    </div>
  );
}

export default BookPage;