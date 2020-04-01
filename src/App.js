import React, { Component } from 'react';
import './App.css';
import LibraryView from './LibraryView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [{ title: 'The Great Adventures', author: 'Marc Zuckerbee', coverUrl: 'https://www.bookcoversclub.com/wp-content/uploads/2018/07/book-cover-354.jpg' },
      { title: 'The Great Adventures 2', author: 'Marc Zuckerbee', coverUrl: 'https://www.bookcoversclub.com/wp-content/uploads/2018/07/book-cover-354.jpg' }]
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to our Book Store!</h1>

        <LibraryView books={this.state.books} />
      </div>
    );
  }


}

export default App;
