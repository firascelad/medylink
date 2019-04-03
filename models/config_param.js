module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('config_param', {
    'type_param': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'code_param': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'libelle_FR': {
      type: DataTypes.STRING,
    },
    'libelle_EN': {
      type: DataTypes.STRING,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'config_param',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

