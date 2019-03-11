import React, { Component } from 'react';

class MovieRow extends Component {
    movie = this.props.movie


    viewMovie() {
        window.location.href = `https://www.themoviedb.org/movie/${this.movie.id}`
    }


    render() {
        return (

            <table key={this.movie.id} style={{
                backgroundImage: `url(${this.movie.backdrop})`, backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat', border: 'solid 5px', borderColor: '#B7B6C2', backgroundSize: 'cover',

            }}>
                <tbody>
                    <tr>
                        <td>
                            <img alt='Poster' width='150' src={this.movie.poster} style={{ borderRadius: '13%', border: 'solid 4px', marginRight: 8 }} />
                        </td>
                        <td>
                            <h3 style={{ color: '#fff' }}>{this.movie.title}</h3>
                            <span style={{ color: '#fff' }}>Score: {this.movie.vote_average}</span>
                            <p style={{ color: '#fff' }}>{this.movie.overview}</p>
                            <input type='button' onClick={this.viewMovie.bind(this)} value='view' style={{
                                color: '#fff', backgroundColor: '#8AAA79', borderRadius: '13%', width: 50, marginBottom: 8,
                            }} />
                        </td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default MovieRow;