import React from "react";
import BookCard from "./BookCard";

class BookList extends React.Component {
  render() {
    return (
      <div>
        {this.props.clickedBook ? (
          <BookCard
            key={this.props.clickedBook.id}
            handleLike={this.props.handleLike}
            clickedBook={this.props.clickedBook}
          />
        ) : null}
        {this.props.books
          .filter((book) => {
            return book.title.toLowerCase().includes(this.props.handleSearch);
          })
          .map((book) => (
            <li key={book.id} onClick={() => this.props.handleClick(book)}>
              {book.title}
            </li>
          ))}
      </div>
    );
  }
}

export default BookList;
