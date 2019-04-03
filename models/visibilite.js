module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('visibilite', {
    'id_visibilite': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'public': {
      type: DataTypes.INTEGER,
    },
    'invitation': {
      type: DataTypes.INTEGER,
    },
    'geographique': {
      type: DataTypes.INTEGER,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'cherchable': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'visibilite',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

