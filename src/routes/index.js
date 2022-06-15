//Import Layouts
import { HeaderOnly } from '../components/Layout';

//Import Pages
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
];

export const privateRoutes = [];
