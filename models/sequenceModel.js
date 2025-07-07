import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Importa la instancia de Sequelize

const Sequence = sequelize.define('Sequence', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    field: 'id' // Nombre real del campo en la tabla de la base de datos
  },
  sequence_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'sequence_value' // Nombre real del campo en la tabla de la base de datos
  }
}, {
  tableName: 'sequences', // Nombre real de la tabla en la base de datos
  timestamps: false // Si no necesitas marcas de tiempo, puedes desactivarlas
});
export default Sequence;
