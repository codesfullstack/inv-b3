import express from 'express';
import {
  addProductInvoice,
  updateProductInvoice,
  deleteProductInvoice,
  getProductInvoice,
  getProductInvoiceByUserId,
  getProductByUserIdInvoice,
  deleteProductsByInvoiceID,
} from '../controllers/productInvoiceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/add-product-invoice', addProductInvoice);
router.put('/update-product-invoice/:id', updateProductInvoice);
router.delete('/delete-product-invoice/:invoiceID', deleteProductInvoice);
router.get('/get-product-invoice/:id', getProductInvoice);
router.get('/get-products-invoice/:idUsuario', getProductByUserIdInvoice);
router.delete('/delete-products-invoice-id/:invoiceID', deleteProductsByInvoiceID);
export default router;
