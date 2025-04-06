import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    prerender: {
      enabled: true,
    },
  },
};

export default config;
