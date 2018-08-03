/**
 *  vue-router 的 routes 配置
 *
 *  注意事项：
 *  子路由的路径不需要写 "/"，会导致从根路径开始匹配
 */

import Home from '../views/Home';
import Layout from '../views/layout/layout';
import NotFound from '../views/errorPages/404';

/**
 * 路由通用 props
 * @param route Object
 * @return Object {action: String, id: Number || null}
 **/
const commonProps = route => ({
    action: route.params.action,
    id: route.params.id ? +route.params.id : null,
});

// 单独页面的routes
const pageRoutes = [
    { 
        path: '/',
        component: Layout,
        children : [
        { path: '/HOME', component: Home },
        { path: '/FE', component: Home},
        { path: '/MeiZi', component:Home},
    ]
       
    },
    
];

const updateRoute = route => {
    if (!route) {
        return;
    }
    if (!pageRoutes.map(v => v.path).includes(route.path) && route.hasOwnProperty('component')) {
        route.components = {
            default: route.component,
        };
        route.props = {
            default: route.props,
        };
    delete route.component;
    }
    (route.children || []).forEach(updateRoute);
};

const Common = [
  { path: '*', component: NotFound },
  { path: '/404', component: NotFound },
];

const routes = Common.concat(pageRoutes);
routes.forEach(updateRoute);

export default routes;
