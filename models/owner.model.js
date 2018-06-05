export default {
  name: 'Owner',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    cash: {
      type: 'varchar',
    }
  },
};
