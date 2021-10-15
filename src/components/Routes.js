import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import { GlobalProvider } from '../context/GlobalState';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <GlobalProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Products" component={Products} />
                    <Route exact path="/contact" component={Contact} />
                </GlobalProvider>
            </Switch>
        </HashRouter>
    );
};

export default Routes;
