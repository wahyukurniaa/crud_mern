import express from "express";

import { createProducts, getProductById, getAllProducts, updateProducts, deleteProducts } from "../controllers/product.js";

const router = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',createProducts);
router.patch('/:id',updateProducts);
router.delete('/:id',deleteProducts);

export default router;