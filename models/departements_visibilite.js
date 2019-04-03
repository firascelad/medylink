module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('departements_visibilite', {
    'id_departement': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_visibilite': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    tableName: 'departements_visibilite',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

