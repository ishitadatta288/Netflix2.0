import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies,searchMovie=false }) => {
  console.log(movies);
  
  return (
    <div className=" px-8">
      <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-4 `}>{title}</h1>
      <div className=" overflow-x-auto no-scrollbar flex cursor-pointer">
        <div className=" flex items-center">
          {movies?.map(movie => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
