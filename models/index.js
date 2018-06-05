import duck from './duck.model';
import owner from './owner.model';

const entities = [ owner, duck ];

export default {
  connection: {
    connectionName: 'mysqlConn',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dev-ducks',
    entitySchemas: entities,
    synchronize: true,
  },
  entities,
};
