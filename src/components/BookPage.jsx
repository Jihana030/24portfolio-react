function BookPage({ data }) {
  
  const stringName = JSON.stringify(data.name);
  const stringDetail = JSON.stringify(data.name);
  const stringTime = JSON.stringify(data.time);

  return (
    <div className="content">
      <div>
        <p className="name">{stringName}</p>
        <p className="text">{stringDetail }</p>
      </div>
      <p className="day">{stringTime }</p>
    </div>
  );
}

export default BookPage;