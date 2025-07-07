import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ProductInvoice = sequelize.define('ProductInvoice', {
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  invoiceType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoiceID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {    // error    :    "Field 'productId' doesn't have a default value"
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dateIssue: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  utility: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});
export default ProductInvoice;
