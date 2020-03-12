import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  Footer,
  SearchBook,
  BookList
} from './components';
import Axios from 'axios';

class App extends Component {
  state = {
    results: [],
  };
  searchLimit = 40;

  formatResponse = data =>
    data.map(value => ({
      id: value.id,
      title: value.volumeInfo.title,
      subtitle: value.volumeInfo.subtitle,
      tmb: value.volumeInfo.imageLinks
        ? value.volumeInfo.imageLinks.smallThumbnail
        : 'no-cover.jpg',
      description: value.volumeInfo.description
        ? value.volumeInfo.description.substring(0, 300) + '...'
        : 'No description available',
      publishedDate: value.volumeInfo.publishedDate,
      authors: value.volumeInfo.authors
        ? [...value.volumeInfo.authors].join(', ')
        : '',
      categories: value.volumeInfo.categories
    }));

  getData = async query => {
    const queryURL = `https://www.googleapis.com/books/v1/volumes?maxResults=${this.searchLimit}&q=${query}`;
    try {
      const res = await Axios.get(queryURL);
      return res.data.items;
    } catch (err) {
      console.log(err);
    }
  };

  getBooks = async query => {
    const data = await this.getData(query);
    data
      ? this.setState({
          results: this.formatResponse(data)
        })
      : alert(`Nothing found :(`);
  };

  render() {
    return (
      <div className="App container d-flex flex-column">
        <Header />
        <main className="flex-grow-1 border">
          <div className="container">
            <SearchBook getBooks={this.getBooks} />
            <div>
              <BookList
                data={this.state.results}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
