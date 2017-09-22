var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = sequelize.create('page', {
    title: Sequelize.STRING,
    urlTitle: Sequelize.TEXT
    content:
  })
  