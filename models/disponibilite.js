module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('disponibilite', {
    'id_disponibilite': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'disponibilite',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

