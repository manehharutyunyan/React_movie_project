import React, { useContext } from "react";
import FavouriteMovieHover from "./FavouriteMovieHover/FavouriteMovieHover";

import AuthContext from "../context/auth-context";

const MovieList = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie"></img>
          {authCtx.isLoggedIn && (
            <FavouriteMovieHover
              handleFavouritesClick={props.handleFavouritesClick}
              favouriteComponent={props.favouriteComponent}
              movie={movie}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default MovieList;
