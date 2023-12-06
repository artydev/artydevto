import createCone from 'van-cone';
import van from 'vanjs-core';
import { routes } from './routes';
import * as svc from "./services";
import { NavBar } from './components';

const { div } = van.tags;

const target = div({ id: 'layout' })
const { navLink } = createCone(target, routes)

const App = () =>
    div(
        NavBar(navLink),
        target
    );

svc.get_all_posts();

export { App }