import routesConfig from '../config/routes';

//Import Layouts
import { HeaderOnly } from '../components/Layout';

//Import Pages
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: routesConfig.home, components: Home },
    { path: routesConfig.following, components: Following },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
    { path: routesConfig.search, components: Search, layout: null },
];

export const privateRoutes = [];
