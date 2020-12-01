import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <h1>There are no Movies in the database</h1>;

    return (
      <div>
        <h1>Showing {this.state.movies.length} movies in the database</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title} </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate} </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    type="button"
                    class="btn btn-danger"
                    style={{ fontWeight: "bold", marginLeft: "50px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
