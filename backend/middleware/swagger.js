const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const options = {
  info: {
    title: 'Cloud Engine API',
    version: '0.0.1',
    description: 'These API endpoint documentations are autogenerated from the backend code.',
  },
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
  tags: [   
    {
      name: 'Authentication',      
      description: 'These endpoints are used for user authentication.', 
    },
    {
      name: 'SDK - IAM',      
      description: 'These endpoints are in charge of interacting with AWS IAM Service.', 
    },
    {
      name: 'SDK - RDS',      
      description: 'These endpoints are in charge of interacting with AWS RDS Service & Deployment .', 
    },
  ],
  definitions: {
    // These are sample model definitions.
}
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['../server.js'];
// const endpointsFiles = ['../routes/AWS/cdk.js'];
swaggerAutogen(outputFile, endpointsFiles, options);