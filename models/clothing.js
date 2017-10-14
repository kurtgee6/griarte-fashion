module.exports = function(sequelize, Sequelize) {
    
       var Clothing = sequelize.define('clothing', {
    
           id: {
               autoIncrement: true,
               primaryKey: true,
               type: Sequelize.INTEGER
           },
           type: {
               type: Sequelize.STRING
           },
           price: {
               type: Sequelize.DECIMAL(2,2)
           },
           sizes: {
               type: Sequelize.STRING
           },
           quantity: {
               type: Sequelize.INTEGER
           },
           image: {
               type: Sequelize.STRING
           }  
       });
    
       return Clothing;
   }