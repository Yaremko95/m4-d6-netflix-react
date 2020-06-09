import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies";
import MoviePage from "../pages/MoviePage";

export default [
  {
    path: "/",
    layout: DefaultLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/tv-shows",
    layout: DefaultLayout,
    component: TVShows,
    exact: false,
  },
  {
    path: "/movies",
    layout: DefaultLayout,
    component: Movies,
    exact: false,
  },
  {
    path: "/movie/:movieId",
    layout: DefaultLayout,
    component: MoviePage,
    exact: false,
  },
];
