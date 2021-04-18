import React, { Component } from 'react'

class BookList extends Component {
    state = {
        books: []
    }
    
    componentDidMount() {
        fetch('https://some-api.com/harry-potter')
        .then((response) => response.json())
        .then(booksList => {
            this.setState({ books: booksList });
        });
    }
    
    render() {
        return (
            <ul>
                {this.state.books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        )
    }
}

export default BookList;