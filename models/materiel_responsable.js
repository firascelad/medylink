module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('materiel_responsable', {
    'id_materiel': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateMiseADispo': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'dateFinMiseADispo': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'materiel_responsable',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

