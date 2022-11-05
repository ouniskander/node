module.exports=(sequelize,DataTypes)=>{
    const livraison=sequelize.define(
        'livraison',
        {
            ref_liv:{
                type:DataTypes.INTEGER,
           
               
            },
           DATE_LIV:{
                type:DataTypes.STRING,
          
            },
           heure_liv:{
                type:DataTypes.STRING,
               
            },
           
        }
    );
    livraison.associate=models=>{
        livraison.hasMany(models.Type,{onDelete:"cascade"})
    }
    return livraison;
}