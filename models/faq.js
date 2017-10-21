module.exports = function(sequelize, Sequelize) {
 
    var Faq = sequelize.define('faq', {
 
        question: {
            type: Sequelize.STRING
        },
 
        answer: {
            type: Sequelize.STRING
        }
 
    });
 
    return Faq;
 
}
