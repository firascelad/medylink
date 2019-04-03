module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_modif_alarme_responsable', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateModification': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
  }, {
    tableName: 'log_modif_alarme_responsable',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

