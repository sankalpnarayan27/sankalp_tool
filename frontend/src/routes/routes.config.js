// import App  from '../containers/App';
import DashBoard from '../containers/DashBoard';
import PageNotFound from '../containers/PageNotFound';
import Login from '../containers/Login';
import CompanyDetails from '../containers/CompanyDetails';
import AddTest from '../containers/AddTest';

const routes = [
    {
        path: '/',
        name: 'Login',
        exact: true,
        component: Login
    },
    {
        path: '/login',
        name: 'Login',
        exact: true,
        component: Login
    },
    {
        path: '/home',
        name: 'DashBoard',
        exact: true,
        component: DashBoard
    },
    {
        path: '/company/:id',
        name: 'CompanyDetails',
        exact: true,
        component: CompanyDetails
    },
    {
        path: '/test/:id',
        name: 'AddTest',
        exact: true,
        component: AddTest
    },
    {   
        path: null,
        name: 'PageNotFound',
        exact: false,
        component: PageNotFound
    }
];

export default routes;