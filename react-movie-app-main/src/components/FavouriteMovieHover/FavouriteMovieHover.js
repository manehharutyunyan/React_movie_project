import React from "react";

const FavouriteMovieHover = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div
      onClick={() => props.handleFavouritesClick(props.movie)}
      className="overlay d-flex align-items-center justify-content-center"
    >
      <FavouriteComponent />
    </div>
  );
};

export default FavouriteMovieHover;
