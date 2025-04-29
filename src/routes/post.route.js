import express from 'express';
import { createPost, getPosts } from '../controllers/post.controller.js';
import cacheMiddleware from '../middlewares/cacheMiddleware.js';
import validateRequest from '../middlewares/validateRequest.js';
import { createPostSchema } from '../validators/post.validator.js';

const postRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts (with optional filters)
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Keyword to search in title or description
 *       - in: query
 *         name: tag
 *         schema:
 *           type: string
 *         description: Comma-separated tag names to filter by
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: createdAt
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - desc
 *             properties:
 *               title:
 *                 type: string
 *                 example: The initial Test post
 *               desc:
 *                 type: string
 *                 example: Cool test post
 *               image:
 *                 type: string
 *                 example: https://example.com/image.jpg
 *               tags:
 *                 type: string
 *                 example: "6448f2c9a83918a9b2f5942f,6448f2c9a83918a9b2f5942e"
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Validation error or bad request
 */

postRouter.get('/', getPosts);
postRouter.post('/', validateRequest(createPostSchema), createPost);

export default postRouter;
