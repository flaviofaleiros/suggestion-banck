import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Suggestion from './pages/Suggestion';
import ListSuggestion from './pages/ListSuggestion';
import Information from './pages/Information';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Suggestion} />
                <Route path="/ListSuggestion" component={ListSuggestion} />
                <Route path="/Information" component={Information} />
            </Switch>
        </BrowserRouter>
    )
}

