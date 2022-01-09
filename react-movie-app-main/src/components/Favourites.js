import React from "react";
import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";

const Favourites = (props) => {
  return (
    <>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={props.favourites}
          handleFavouritesClick={props.removeFavouriteMovie}
          favouriteComponent={props.RemoveFavourites}
        />
      </div>
    </>
  );
};

export default Favourites;
