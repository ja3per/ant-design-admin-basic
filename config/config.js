import pageRoutes from './router.config';
import defaultSettings from '../src/defaultSettings';

export default {
  singular: false,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
        default: 'en-US',
        baseNavigator: true,
      },
    }],
  ],
  // 路由配置
  routes: pageRoutes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // proxy: {
  //     '/dev': {
  //         target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
  //         changeOrigin: true,
  //     },
  // },
};
