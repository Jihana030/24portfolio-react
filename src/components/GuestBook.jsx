import BookPage from "./BookPage";
import PageAdd from "./PageAdd";
import Title from "./Title";

function GuestBook() {
  return (
    <div id="guestBook_wrap">
      <PageAdd/>
      <Title title='방명록'/>
      <div className="contents_wrap">
        <BookPage />
      </div>
    </div>
  );
}

export default GuestBook;