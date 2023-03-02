import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
 
const dev = process.argv.includes('dev');
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
};

export default config;
