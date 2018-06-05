import serializeArray from '../serialization/serializeArray';

export default {
  // getDucks: {
  //   callback: (req, { duckRepository, serializer: { serialize }}) =>
  //     duckRepository.find({ relations: ['owner'] })
  //       .then(results => serializeArray(serialize, results, null, 'duck'))
  //       .then(results => ({
  //         body: results,
  //         status: 200,
  //       })),
  //   methods: ['GET'],
  //   path: '/duck',
  // },
  getDucks: {
    callback: (req, { duckRepository }) =>
      // duckRepository.find({ relations: ['owner'] })
      duckRepository.find()
        .then((results) => ({
          body: results,
          status: 200,
        })),
    methods: ['GET'],
    path: '/duck',
  },
  getDuck: {
    callback: ({ params: { id } }, { duckRepository }) =>
      duckRepository.findOne({ id })
        .then((result) => ({
          body: result,
          status: 200,
        })),
    methods: ['GET'],
    path: '/duck/:id',
  },
  createDuck: {
    callback: ({ body }, { duckRepository }) => console.log(body) ||
      duckRepository
        .save(body)
        .then((result) => ({
          body: result,
          status: 201,
        })),
    methods: ['POST'],
    path: '/duck',
  },
}
