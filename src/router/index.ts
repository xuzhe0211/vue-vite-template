import {createRouter, createWebHashHistory} from 'vue-router';

export const router = createRouter({
    history: createWebHashHistory(),
    /**
     * 说明：
     * 1、notFoundAndNoPower 默认添加 404、401 界面，防止一直提示 No match found for location with path 'xxx'
     * 2、backEnd.ts(后端控制路由)、frontEnd.ts(前端控制路由) 中也需要加 notFoundAndNoPower 404、401 界面。
     *    防止 404、401 不在 layout 布局中，不设置的话，404、401 界面将全屏显示
     */
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/test.vue'),
            meta: {
                title: 'test'
            }
        }
    ]
});

// 导出路由
export default router;
