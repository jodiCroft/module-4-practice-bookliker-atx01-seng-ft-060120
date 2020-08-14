import React from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image,
} from "semantic-ui-react";

class BookCard extends React.Component {
  render() {
    const book = this.props.clickedBook;
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Booklicker</Menu.Item>
        </Menu>
        <main>
          <Container text>
            <Header>{book.title}</Header>
            <Image src={book.img_url} size="small" />
            <p>{book.description}</p>
            <Button
              onClick={() => this.props.handleLike(book)}
              color="pink"
              content="Lick"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: book.users.length,
              }}
            />
            <Header>Licked by</Header>
            <List>
              {book.users.map((user) => (
                <List.Item icon="user" content={user.username} />
              ))}
            </List>
          </Container>
        </main>
      </div>
    );
  }
}

export default BookCard;
