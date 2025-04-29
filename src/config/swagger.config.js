import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// I chose swagger because i was familiar with it and used it in the past

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Posts & Tags API",
      version: "1.0.0",
      description: "API for managing posts and tags",
    },
    servers: [
      {
        url: "http://localhost:3001/api/v1",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerSpec };
