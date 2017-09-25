var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page =  db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    getRoute: function(){
      return '/wiki/'+this.urlTitle
    },
    content: {
       type: Sequelize.TEXT,
       allowNull: true
    },
    status:{
      type: Sequelize.ENUM('open','closed'),
      allowNull: true
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  })

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate:{
      isEmail: true
    }
  }
})

Page.sync()
User.sync()

module.exports = {
  Page: Page,
  User: User,
  db:db
};

