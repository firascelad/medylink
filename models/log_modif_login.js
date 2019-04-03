module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_modif_login', {
    'id_utilisateur_modifie': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_utilisateur_acteur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateModification': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'typeModif': {
      type: DataTypes.STRING,
    },
    'lastMdp': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'log_modif_login',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

