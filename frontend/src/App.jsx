import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/video/:id" component={Video} />
                <Route path="/upload" component={Upload} />
                <Route path="/profile" component={Profile} />
                <Route path="/search" component={Search} />
            </Switch>
        </div>
    );
}

export default App;

