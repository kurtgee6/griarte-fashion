
module.exports = function(sequelize, DataTypes) {
    const Clothing = sequelize.define('Clothing', {
        type: Sequelize.STRING,
        price: Sequelize.STRING,
        size: Sequelize.STRING,
        quantity: Sequelize.STRING,
        quantity:Sequelize.STRING
      });
      
    return Clothing;
};
  