import reactRefresh from '@vitejs/plugin-react-refresh';
import laravel from 'laravel-vite-plugin';

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    plugins: [
        reactRefresh(),
        laravel([
            'resources/css/app.css',
        ]),
    ],
});
