module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('fichier', {
    'nom': {
      type: DataTypes.STRING,
    },
    'chemin': {
      type: DataTypes.STRING,
    },
    'dateFichier': {
      type: DataTypes.DATE,
    },
    'fk_id_diagnostic': {
      type: DataTypes.INTEGER,
    },
    'typeFichier': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'fichier',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

