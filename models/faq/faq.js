
module.exports = function(sequelize, DataTypes) {
    const Faq = sequelize.define('Faq', {
        question: Sequelize.STRING,
        answer: Sequelize.STRING
      });
      
    return Faq;
};
  