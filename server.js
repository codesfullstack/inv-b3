import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import productsInvoiceRoutes from './routes/productInvoiceRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const allowedOrigins = [
  'https://xxxxxxxxx.vercel.app',
  'http://localhost:3000',
  'https://xxxxxxxxx.vercel.app',
  'https://xxxxxxxxx.vercel.app',
  'https://xxxxxxxxx.vercel.app',
  'https://xxxxxxxxx.vercel.app',
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
  });

app.use(cors({
  origin: [
    '*',
    'http://localhost:3000',
    'https://xxxxxxxxx.onrender.com',
    'https://xxxxxxxxx.onrender.com',
    'https://xxxxxxxxx.vercel.app',
    'https://xxxxxxxxx.vercel.app',
    'https://xxxxxxxxx.vercel.app/',
    'https://xxxxxxxxx.vercel.app',
  ],
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/products-invoices', productsInvoiceRoutes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));