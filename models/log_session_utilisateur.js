module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_session_utilisateur', {
    'utilisateur_id_utilisateur': {
      type: DataTypes.INTEGER,
    },
    'id_logsession': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateConnexion': {
      type: DataTypes.DATE,
    },
    'dateDeconnexion': {
      type: DataTypes.DATE,
    },
    'timeout': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'log_session_utilisateur',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'utilisateur_id_utilisateur',
      targetKey: 'id_utilisateur',
      as: '_utilisateur_id_utilisateur',
    });
    
  };

  return Model;
};

