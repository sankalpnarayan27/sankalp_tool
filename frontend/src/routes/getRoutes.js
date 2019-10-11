import React from 'react';
import { Route } from 'react-router-dom';

import routes from "./routes.config";

let isAuthenticated = localStorage.getItem('accessToken');

export default function getRoutes() {
    return routes.map((prop, key) => {

        if (prop.exact && isAuthenticated) {
            return <Route exact path={prop.path} component={prop.component} key={key} />
        }
        else if (!prop.path) {
            return <Route component={prop.component} key={key} />
        }

        return (
            <Route path={prop.path} component={prop.component} key={key} />
        )
    });
}