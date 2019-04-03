module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('symptome', {
    'id_symptome': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'txt_symptome': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'symptome',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

