module.exports=(sequelize,DataTypes)=>{
    const Type=sequelize.define(
        'Type',
        {
           type:{
                type:DataTypes.STRING,
                allowNull:false
              
            },
           libele:{
                type:DataTypes.STRING,
                allowNull:false
            },
         
        }
    );
    Type.associate=models=>{
        Type.belongsTo(models.livraison,{onDelete:"cascade"})
    }
    return Type;
}