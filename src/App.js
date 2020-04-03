import React, { Component } from 'react';
import './App.css';
import FilterPanel from './FilterPanel';
import LibraryView from './LibraryView';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      books: [{ title: 'The Great Adventures', author: 'Marc Zuckerbee', coverUrl: 'https://www.bookcoversclub.com/wp-content/uploads/2018/07/book-cover-354.jpg' },
      { title: 'Horrible 2', author: 'Marc Zuckerbee', coverUrl: 'https://www.bookcoversclub.com/wp-content/uploads/2018/07/book-cover-354.jpg' }]
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log(this.state.searchTerm);
  }

  render() {
    const filteredBooks = this.state.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div>
        <h1>Welcome to our Book Store!</h1>
        <FilterPanel searchEvent={this.onSearchChange} />
        <LibraryView books={filteredBooks} />
      </div>
    );
  }


}

export default App;
