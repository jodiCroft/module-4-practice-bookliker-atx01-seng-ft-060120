import React from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  state = {
    books: [],
    clickedBook: null,
    search: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((books) => {
        this.setState({ books });
      });
  }

  handleClick = (book) => {
    this.setState({ clickedBook: book });
  };

  handleLike = (book) => {
    let books;
    if (book.users.some((user) => user.id === 1)) {
      return;
    } else {
      const users = [...book.users, { id: 1, username: "pouros" }];
      books = this.state.books.map((singleBook) => {
        const newBook = { ...singleBook };
        if (book.id === singleBook.id) {
          newBook.users = users;
        }
        return newBook;
      });
      fetch(`http://localhost:3000/books/${book.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users: users }),
      })
        .then((res) => res.json())
        .then((clickedBook) => this.setState({ clickedBook, books }));
      return book.users;
    }
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <BookList
          handleLike={this.handleLike}
          handleSearch={this.state.search}
          clickedBook={this.state.clickedBook}
          handleClick={this.handleClick}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
