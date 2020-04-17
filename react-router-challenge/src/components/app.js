import React from 'react';
import AboutMenu from './about-menu';
import {Route} from 'react-router-dom';

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Route path='/about/foo/bar' component={AboutMenu} />
            <Route path='/about/bar' component={AboutMenu} />
            <Route exact path='/about/foo' component={AboutMenu} />

        </div>
    );
}
