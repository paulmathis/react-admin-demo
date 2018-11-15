import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import Voip from './util/Voip';

export default [
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/segments" component={Segments} />,
    <Route exact path="/voip/:phone" component={Voip} />,
];
