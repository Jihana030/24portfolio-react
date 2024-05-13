function OlderTime() {
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth() + 1;
  const firstYear = 2023;
  const firstMonth = 5;
  const year = nowYear - firstYear;
  const month = nowMonth - firstMonth;

  return (
    <span>
      (총 {year}년 {month}개월)
    </span>
  );
}

export default OlderTime;
