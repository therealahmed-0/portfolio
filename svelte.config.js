import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build'
    }),
    prerender: {
      default: true
    }
  }
};

export default config;
