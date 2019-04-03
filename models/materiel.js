module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('materiel', {
    'id_materiel': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'id_boitier': {
      type: DataTypes.STRING,
    },
    'version': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'type_materiel': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'materiel',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

