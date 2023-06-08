import {ConfigEnv, defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import {resolve} from 'path';

// https://vitejs.dev/config/
const pathResolve = (dir: string) => {
    return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
    '@': pathResolve('./src/')
};

const proxy = {};
const define = {};

const viteConfig = defineConfig((mode: ConfigEnv) => {
    const env = loadEnv(mode.mode, process.cwd());
    return {
        base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
        root: process.cwd(),
        resolve: {alias},
        server: {
            host: '0.0.0.0',
            port: env.VITE_PORT as unknown as number,
            open: JSON.parse(env.VITE_OPEN),
            hmr: true,
            proxy
        },
        plugins: [
            vue(),
            eslint(),
            stylelint({
                fix: true,
                cache: false
            })
        ],
        define: define
    };
});

export default viteConfig;
