export default {
  name: 'duck',
  properties: [
    { name: 'name', type: 'string' },
    { name: 'color', type: 'string' },
    {
      name: 'owner',
      type: 'object',
      properties: [
        { name: 'name', type: 'string' },
        { name: 'id', type: 'string' },
        // { name: 'cash', type: 'string', parsers:['money'] },
    ]},
  ],
};
