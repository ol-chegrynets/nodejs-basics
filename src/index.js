// import './Modules/Modul-02/index.js';
// import './Modul-02-cors/server.js'
// import './Modules/Modul-01/index.js';

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
