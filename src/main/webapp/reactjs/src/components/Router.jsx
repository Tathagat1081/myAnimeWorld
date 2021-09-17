import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import WelcomePage from "./WelcomePage.jsx";
import history from './History.jsx';
import Shounen from './GenreFolder/Shounen';
import Seinen from './GenreFolder/Seinen';
import Isekai from './GenreFolder/Isekai';
import SliceOfLife from './GenreFolder/SliceOfLife';
import Mystery from './GenreFolder/Mystery';
import Thriller from './GenreFolder/Thriller';
import Ost from "./Ost";
import Favourites from "./Favourites";
import AboutUs from "./AboutUs";

const Routes = () => 
 {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={WelcomePage} /> 
                    <Route path="/contact" component={Contact} />
                    <Route path="/Genre1" component={Shounen}/>
                    <Route path="/Genre2" component={Seinen}/>
                    <Route path="/Genre3" component={Isekai}/>
                    <Route path="/Genre4" component={SliceOfLife}/>
                    <Route path="/Genre5" component={Mystery}/>
                    <Route path="/Genre6" component={Thriller}/>
                    <Route path="/OST" component={Ost}/>
                    <Route path="/Favourites" component={Favourites}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                    
                </Switch>
            </Router>
        )
    }
export default Routes; 