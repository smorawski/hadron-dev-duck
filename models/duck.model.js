export default {
  name: 'Duck',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    color: {
      type: 'varchar',
    },
  },
  relations: {
    owner: {
      target: 'Owner',
      type: 'one-to-one',
      joinColumn: true,
      cascade: true,
    }
  },
};
