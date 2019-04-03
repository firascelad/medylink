module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('pathologie', {
    'pathologie_principale': {
      type: DataTypes.INTEGER,
    },
    'id_pathologie': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'code': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'pathologie',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.pathologie, {
      foreignKey: 'pathologie_principale',
      targetKey: 'id_pathologie',
      as: '_pathologie_principale',
    });
    
  };

  return Model;
};

