import dbConfig from './models';
import routingConfig from './routes';
import serializerConfig from './serialization';
import eventsConfig from './events';

export default {
  ...eventsConfig,
  ...dbConfig,
  ...routingConfig,
  ...serializerConfig,
};
