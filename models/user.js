module.exports = (sequelize,DataTypes,Model) => {

    class User extends Model { }

    User.init(
        {
            
            fullname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,   
            },
            sin: {
                type: DataTypes.STRING, 
                allowNull: true,  
            },
            college: {
                type: DataTypes.STRING, 
                allowNull: true,  
            },
            type: {
                type: DataTypes.STRING, 
                allowNull: true,  
            },
            phone:{
                type: DataTypes.STRING, 
                allowNull: true, 
            },
            password: {
                type: DataTypes.STRING, 
            },
        },
        {
            
            sequelize, 
            modelName: 'User', 
        },
    );

    // the defined model is the class itself
    console.log(User === sequelize.models.User);
}