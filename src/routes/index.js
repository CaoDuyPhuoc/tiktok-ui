import config from '../config';

//Import Layouts
import { HeaderOnly } from '../components/Layout';

//Import Pages
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.following, components: Following },
    { path: config.routes.profile, components: Profile },
    { path: config.routes.upload, components: Upload, layout: HeaderOnly },
    { path: config.routes.search, components: Search, layout: null },
];

export const privateRoutes = [];
