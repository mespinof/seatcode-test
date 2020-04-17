import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { MainPage } from './pages/MainPage';
import { MapDataContextProvider } from './provider/MapDataContextProvider';

ReactDOM.render(
    <MapDataContextProvider>
        <MainPage />
    </MapDataContextProvider>,

    document.getElementById('root'),
);
