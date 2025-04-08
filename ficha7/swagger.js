const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./projeto/app.js'];

swaggerAutogen(outputFile, endpointsFiles)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));