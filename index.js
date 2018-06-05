import express from 'express';
import bodyParser from 'body-parser';

import hadron from '@brainhubeu/hadron-core';
import * as hadronExpress from '@brainhubeu/hadron-express';
import * as hadronTypeorm from '@brainhubeu/hadron-typeorm';
import * as hadronSerialization from '@brainhubeu/hadron-serialization';
import * as hadronEvents from '@brainhubeu/hadron-events';

import config from './config';

const app = express();
app.use(bodyParser.json());

hadron(app, [
  // hadronEvents,
  hadronTypeorm,
  // hadronExpress,
  // hadronSerialization,
], config)
  .then((Container) => {
    // Container.register('message', 'Hello Dev 🦆');
    app.listen(8000);
  });
