//Nested Routes
//Create Nested Routes in React-Router
//Use the useRouteMatch and use Params to access information about React Router's internal state

//list/detail interface
//Master/detail pattern ..Apple $ YouTube..Messages, Videos, Emails
//You-Tube assigns Unique Values to each Video

//App -> NavBar -> MoviePage -> MovieList -> MovieShow Component flow
//Rendering our List

// const [movies, setMovies] = useState({
//     1: {id: 1, title: "A river runs through it"},
//     2: {id: 2, title: "se7en"},
//     3: {id: 3, title: "Inception"}
// });

// //MoviesList Component
// import React from "react";
// import { Link } from 'react-router-dom';

// function MovieList({movies}) {
//     const renderMovies = Object.keys(movies).map((movieID) => (
//         <li key={movieID}>
//             <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
//         </li>
//     ));
//     return <ul>{renderMovies}</ul>;
// }

// export default MovieList;

// //Linking to the Individual MoviePage
// import {Route, useRouteMatch} from "react-router-dom";
// function MoviesPage({movies}){
//     const match = useRouteMatch();
//     console.log(match);

//     return (
//         <div>
//             <MoviesList movies={movies}/>
//             <Route path={`${match.url}/:movieID}`}>
//                 <MoviesShow />
//             </Route>
//         </div>
//     )
// }


