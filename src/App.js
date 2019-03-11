import React, { Component } from 'react';
import $ from 'jquery';
import MovieRow from './MovieRow';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}


    this.performSearch('avengers')
  }

  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=c0eb14744b48640ab0c8fa0c45673110`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('got it');
        const results = searchResults.results

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          movie.backdrop = `https://image.tmdb.org/t/p/w185${movie.backdrop_path}`
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error('dang it, fetch failed');
      }
    })
  }

  searchChange(e) {
    const searchTerm = e.target.value
    this.performSearch(searchTerm)

  }

  render() {
    return (
      <div>
        <table style={{
          backgroundColor: '#111',
          display: 'block',
          color: '#fff',
          paddingLeft: 50,
        }}>
          <tbody>
            <tr>
              <td style={{ paddingRight: 10 }}>
                <img alt="app icon" width="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1j3Pxma02TY1bhHPAp4DvwunAmDQ9dqKcRVFGqMAV9xDwgvY" />
              </td>
              <td>
                <h1>Movie Find</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          placeholder="Enter a Movie"
          style={{
            fontSize: 24,
            width: "95%",
            display: "block",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 50
          }} onChange={this.searchChange.bind(this)} />


        {this.state.rows}

      </div >
    );
  }
}

export default App;
