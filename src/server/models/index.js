import Sequelize from 'sequelize';

// required to load js files with require.context statement
if (process.env.NODE_ENV === 'development'){
  require('babel-plugin-require-context-hook/register')()
}

export default (sequelize) => {
  let db = {};
  // search for all files ending .js and load
  const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/, 'sync')
  context.keys().map(context).forEach( module => {
    const model = module(sequelize, Sequelize);
    db[model.name] = model;
  });
  
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  return db;
};