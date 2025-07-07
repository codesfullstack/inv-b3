import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Importa mysql2 utilizando la sintaxis de importaciÃ³n

const sequelize = new Sequelize('bf4i4aiupjmeu75cexyd', 'utjhsbejjehli2uf', 'jvc9UkL8YeyokqxKMPLW', {
  host: 'xxxxxxxxx.clever-cloud.com',
  dialect: 'mysql',
  dialectModule: mysql2 // Utiliza la variable mysql2 directamente en lugar de require
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
export default sequelize;
