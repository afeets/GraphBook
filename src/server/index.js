import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import path from 'path';

import services from './services';
// instatiate sequelize, including db models
import db from './database';

const root = path.join(__dirname, '../../');
const app = express();
const serviceNames = Object.keys(services);

if(process.env.NODE_ENV === 'production'){
  app.use(helmet()); // secure app setting HTTP Headers
  
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
  }));

  app.use(helmet.referrerPolicy({ policy: 'same-origin'}));
}

app.use(compress()); // compress all responses going through it
app.use(cors()); // allow cross site

// app.get('*', (req, res) => res.send('Hello World'));
app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});



for (let i = 0; i < serviceNames.length; i += 1){
  const name = serviceNames[i];
  if(name === 'graphql'){
    (async () => {
      await services[name].start();
      services[name].applyMiddleware({ app });
    })();
  }
  else {
    app.use(`/${name}`, services[name]);
  }
}



app.listen(8000, () => console.log('Listening on port 8000'));