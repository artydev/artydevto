
import { homePage } from "../pages/home"
import { userPage} from '../pages/user';
import { aboutPage } from "../pages/about";

const routes = [
    { path: '/', name: 'home', callable: async () =>  { return homePage } },
    { path: '/user/:userId', name: 'user', callable: async () => userPage },
    { path: '/about', name: 'about', callable: async () => aboutPage }
];

export { routes }