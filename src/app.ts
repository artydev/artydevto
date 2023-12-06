import createCone from 'van-cone';
import van from 'vanjs-core';
import { routes } from './routes';
import { NavBar } from './components';

const { div } = van.tags;
const target = div({ id: 'layout' })
const R = createCone(target, routes)

const App = () =>
    div(
        NavBar(R.navLink),
        target
    );
    
export { App } 