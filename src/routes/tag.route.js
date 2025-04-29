import express from 'express';
import { createTag, getTags } from '../controllers/tag.controller.js';
import validateRequest from '../middlewares/validateRequest.js';
import { createTagSchema } from '../validators/tag.validator.js';

const tagRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Tag management
 */

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Create a new tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: technology
 *     responses:
 *       201:
 *         description: Tag created successfully
 *       400:
 *         description: Validation error or tag already exists
 */

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Get all tags
 *     tags: [Tags]
 *     responses:
 *       200:
 *         description: List of tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */



tagRouter.post('/', validateRequest(createTagSchema), createTag);
tagRouter.get('/', getTags);

export default tagRouter;
