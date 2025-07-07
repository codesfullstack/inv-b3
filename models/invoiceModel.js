import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Invoice = sequelize.define('Invoice', {
  invoiceID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  invoiceType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateIssue: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  subTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  taxes: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  customer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentSell: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentBuy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Invoice;