import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Importa la instancia de Sequelize

const Product = sequelize.define('Product', { // Utiliza sequelize.define para definir el modelo
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,  //ya que la base lo crearÃ¡
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  utility: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  timestamps: true,
});
export default Product;
