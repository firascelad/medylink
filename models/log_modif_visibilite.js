module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_modif_visibilite', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_visibilite': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateModification': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'typeModification': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'log_modif_visibilite',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

