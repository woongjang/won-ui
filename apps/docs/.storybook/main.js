const path = require('path');
const react = require('@vitejs/plugin-react');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" },
      },
      plugins: [
        ...config.plugins.filter(
          plugin => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
        ),
        react({
          exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
          jsxImportSource: '@emotion/react',
          babel: {
            plugins: ['@emotion/babel-plugin'],
          },
        }),
      ],
      resolve: {
        alias: [
          {
            find: '@won-ui/core',
            replacement: path.resolve(__dirname, '../../../packages/won-ui-core/'),
          },
        ],
      },
    };
  },
};
