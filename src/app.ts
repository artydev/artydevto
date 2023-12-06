import createCone from 'van-cone';
import van from 'vanjs-core';
import { routes } from './routes';
import * as svc from "./services";

const { div, span, hr } = van.tags;

const SPA = div({ id: 'layout' })
const { navLink } = createCone(SPA, routes);
const nav_link = navLink;

const App = () =>
    div(
        div(
            { class: "navbar" },
            nav_link({ name: 'home' }, 'Home'),
            span(' | '),
            nav_link({ name: 'user', params: { userId: 123 } }, 'User'),
            span(' | '),
            nav_link({ name: 'about' }, 'About')
        ),
        SPA
    );

svc.get_all_posts();

export { App }