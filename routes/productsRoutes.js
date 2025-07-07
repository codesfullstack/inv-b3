import express from 'express';
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProductByUserId,
  updateProductAmount,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/add-product', addProduct);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);
router.get('/get-product/:id', getProduct);
router.get('/get-products/:idUsuario', getProductByUserId);
router.put('/update-product-amount/:productId', updateProductAmount);
export default router;
