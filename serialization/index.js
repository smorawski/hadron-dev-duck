import duck from './duck';

export default {
  serializer: {
    schemas: [
      duck,
    ],
    parsers: {
      money: value => `${value}$`,
    }
  }
};
