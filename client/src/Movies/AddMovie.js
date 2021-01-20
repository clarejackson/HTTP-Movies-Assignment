import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  id: null,
  title: '',
  director: '',
  metascore: null,
  stars: [''],
}

export const AddMovie = () => {
  const [movie, setMovie] = useState(initialState);
  const { push } = useHistory();

  const handleChange = e => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/movies/', movie)
    .then(res => {
      console.log(res);
      push('/');
    })
    .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>Add a Movie!</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        onChange={handleChange}
        placeholder="Id"
        value={movie.id}
      />

      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={movie.title}
      />

      <input
        type="text"
        name="director"
        onChange={handleChange}
        placeholder="Director"
        value={movie.director}
      />

      <input
        type="text"
        name="metascore"
        onChange={handleChange}
        placeholder="Metascore"
        value={movie.metascore}
      />

      <input
        type="text"
        name="stars"
        onChange={handleChange}
        placeholder="Stars"
        value={movie.stars}
      />
      <button>Add a movie</button>
      </form>

    </div>
  )
}