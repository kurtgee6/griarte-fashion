
module.exports = function(sequelize, DataTypes) {
    const Clothing = sequelize.define('project', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT
      });
      
    return Clothing;
};
  