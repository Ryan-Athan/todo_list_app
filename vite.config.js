import { build, defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    build: {
        outDir : '../dist', // define the output directory , the output directory for to build files 
    }
});