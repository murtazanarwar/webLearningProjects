const Book = (props) => {
  const { img, title, author, id, getBook, number } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <button onClick={getSingleBook}>CLICK ME</button>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
