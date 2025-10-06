import config from './config';

export default {
  swagger: {
    info: {
      title: 'Marketplace API',
      description: '',
      version: '0.1.0',
    },
    servers: [{ url: config.url }],
    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  exposeRoute: true,
};
