import express from 'express';
import {
  addInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
  getInvoicesByUserId,
  generateId
} from '../controllers/invoiceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/add-invoice', addInvoice);
router.put('/update-invoice/:id', updateInvoice);
router.delete('/delete-invoice/:id', deleteInvoice);
router.get('/get-invoice/:id', getInvoice);
router.get('/get-invoices/:idUsuario', getInvoicesByUserId);
router.get('/generate-id/:invoiceType', generateId);
export default router;
