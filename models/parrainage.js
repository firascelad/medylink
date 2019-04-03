module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('parrainage', {
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'fk_id_utilisateur': {
      type: DataTypes.INTEGER,
    },
    'nom_filleul': {
      type: DataTypes.STRING,
    },
    'prenom_filleul': {
      type: DataTypes.STRING,
    },
    'email_filleul': {
      type: DataTypes.STRING,
    },
    'date_demande': {
      type: DataTypes.DATE,
    },
    'adresse': {
      type: DataTypes.STRING,
    },
    'adresse2': {
      type: DataTypes.STRING,
    },
    'codePostal': {
      type: DataTypes.STRING,
    },
    'Mobile_filleul': {
      type: DataTypes.STRING,
    },
    'tel_filleul': {
      type: DataTypes.STRING,
    },
    'ville': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'parrainage',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_utilisateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_utilisateur',
    });
    
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
  };

  return Model;
};

