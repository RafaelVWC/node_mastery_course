const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts','root', '', {
    host: 'localhost',
    dialect: 'mysql',
})


try{
    sequelize.authenticate()
    console.log('Successfully connected!')
}catch(err){
    console.log(`Unable to connect to database: ${err}`)
}


module.exports = sequelize