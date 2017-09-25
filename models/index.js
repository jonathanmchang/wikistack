var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page =  db.define('page', {
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    content: {
       type: Sequelize.TEXT,
       allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open','closed'),
      allowNull: true
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    getterMethods: {
      route(){
        return  '/wiki/' + this.urlTitle
      }
    }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
    // validate:{
    //   isEmail: true
    // }
  }
})

Page.sync()
User.sync()

module.exports = {
  Page: Page,
  User: User,
  db:db
};

