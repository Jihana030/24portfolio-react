function GuestBookWrite() {
  return (
    <div id="guestBook_wrap">
      <div className="title">
        <h2>글쓰기</h2>
      </div>
      <div id="guestbook-container" className="form_wrap">
          <form id="leave-message">
            <div>
              <label htmlFor="title">제목</label>
              <input id="title" type="text" autofocus/>
            </div>
            <div>
              <label htmlFor="name">이름</label>
              <input id="name" type="text"/>
            </div>
            <div>
              <label htmlFor="detail">내용</label>
              <textarea name="detail" id="detail"></textarea>
            </div>
            <div className="write_btn">
              <button type="reset">다시쓰기</button>
              <button type="submit">저장</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default GuestBookWrite;