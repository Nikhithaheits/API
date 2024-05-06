const{Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize('postgres://postgres:chinnu@localhost:5432/project',{dialect:"postgres"})
sequelize.authenticate().then(()=>{
    console.log('Database connected to project')
}).catch((err)=>{
console.log(err)
})
const db={} 
db.Sequelize=Sequelize
db.sequelize=sequelize 

db.users=require('./userModel')(sequelize,DataTypes) 
module.exports=db