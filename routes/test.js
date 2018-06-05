export default {
  helloWorld: {
    callback: () => 'Hello world!',
    methods: ['GET'],
    path: '/',
  },
  helloWithMessage: {
    callback: (req, { message }) => message,
    methods: ['GET'],
    path: '/message',
  },
  helloSomeone: {
    callback: ( { params: { parameter } } ) => `Hello ${parameter}`,
    methods: ['GET'],
    path: '/:parameter',
  },
  testRoute: {
    callback: (request, dependencies) => ({
      status: 201,
      redirect: '/',
      headers: { contentType: 'application/json' },
      body: { response: 'It\'s easy!' },
    }),
    methods: ['GET'],
    path: '/testRoute',
  }
};
