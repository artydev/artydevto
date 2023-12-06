
import { homePage } from "../components/home"
import { userPage} from '../components/user';
import { aboutPage } from "../components/about";

const routes = [
    { path: '/', name: 'home', callable: async () => homePage },
    { path: '/user/:userId', name: 'user', callable: async () => userPage },
    { path: '/about', name: 'about', callable: async () => aboutPage }
];

export { routes }