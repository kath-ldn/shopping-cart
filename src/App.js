import React from "react";
import Routes from './Routes';
import { Provider } from './CartContext';

const App = () => {
    return(
        <Provider>
            <Routes />
        </Provider>
    )
};

export default App;