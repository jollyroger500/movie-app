import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, MusicSubmitSong, MoviesCategoryInsert, MoviesShowAll, CategoriesShowAll, VoteMovie, ShowAllSongs } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    componMoviesShowAllent={MoviesUpdate}
                />
                <Route path="/movies/submitsong" exact component={MusicSubmitSong} />
                <Route path="/movies/createcategory" exact component={MoviesCategoryInsert} />
                <Route path="/movies/showall" exact component={MoviesShowAll} />
                <Route path="/movies/showcategories" exact component={CategoriesShowAll} />
                <Route path="/movies/votemovie" exact component={VoteMovie} />
                <Route path="/song/showall" exact component={ShowAllSongs} />
            </Switch>
        </Router>
    )
}

export default App