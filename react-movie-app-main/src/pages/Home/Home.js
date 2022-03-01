import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import MovieList from "../../components/MovieList";
import MovieListHeading from "../../components/MovieListHeading";
import SearchBox from "../../components/SearchBox";
import AddFavourites from "../../components/AddFavourites";
import RemoveFavourites from "../../components/RemoveFavourites";
import Cart from "../../components/Card/Cart.js";
import AuthContext from "../../context/auth-context";
import Button from "../../components/Button/Button";
import Products from "../../components/Shop/Products";
import CartButton from "../../components/Card/CartButton"

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const authCtx = useContext(AuthContext);

  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      console.log(movieFavourites);
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
	if(favourites.some(m => m.imdbID === movie.imdbID))
	return; 

    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Button onClick={authCtx.onLogout}>
          <NavLink to="/login">Logout</NavLink>
        </Button>
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
      <div className="row">
        {showCart && <Cart />}
        <Products productsList={favourites} />
      </div>
    </div>
  );
};

export default Home;
