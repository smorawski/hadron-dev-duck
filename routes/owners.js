export default {
  getOwners: {
    callback: (req, { ownerRepository }) =>
      ownerRepository.find()
        .then((results) => ({
          body: results,
          status: 200,
        })),
    methods: ['GET'],
    path: '/owner',
  },
  getOwner: {
    callback: ({ params: { id } }, { ownerRepository }) =>
      ownerRepository.findOne({ id })
        .then((result) => ({
          body: result,
          status: 200,
        })),
    methods: ['GET'],
    path: '/owner/:id',
  },
  createOwner: {
    callback: ({ body }, { ownerRepository }) =>
      ownerRepository
        .save(body)
        .then((result) => ({
          body: result,
          status: 201,
        })),
    methods: ['POST'],
    path: '/owner',
  }
}
