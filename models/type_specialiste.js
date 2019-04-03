module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('type_specialiste', {
    'type_param': {
      type: DataTypes.STRING,
    },
    'code_param': {
      type: DataTypes.INTEGER,
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
    tableName: 'type_specialiste',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

