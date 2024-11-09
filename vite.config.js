import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
        react(),
    ],
    resolve:{
        alias: {
            "@": "/resources/js",
            ziggy: path.resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue'),
        }
    }
});
