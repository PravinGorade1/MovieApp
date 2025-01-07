import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Popular from "../Pages/Popular";
import UpcomingMovies from "../Pages/UpcomingMovies";
import TopRatedMovies from "../Pages/TopRatedMovies";  // Make sure TopRatedMovies is imported
import Home from "../Pages/Home";
import MovieDetail from "./MovieDetail";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">MovieDb</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
              <li className="nav-item">
                <NavLink className="nav-link" to="/popular">Popular</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/top-rated">Top Rated</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/upcoming">Upcoming</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/popular" element={<Popular/>} />
        <Route path="/top-rated" element={<TopRatedMovies/>} />
        <Route path="/upcoming" element={<UpcomingMovies/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
