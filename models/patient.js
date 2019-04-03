module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('patient', {
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'adresse': {
      type: DataTypes.STRING,
    },
    'adresse2': {
      type: DataTypes.STRING,
    },
    'allergies': {
      type: DataTypes.STRING,
    },
    'codePostal': {
      type: DataTypes.STRING,
    },
    'dateNaissance': {
      type: DataTypes.DATE,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'dossier': {
      type: DataTypes.STRING,
    },
    'mobile': {
      type: DataTypes.STRING,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'nomMg': {
      type: DataTypes.STRING,
    },
    'nummut': {
      type: DataTypes.STRING,
    },
    'numss': {
      type: DataTypes.STRING,
    },
    'prenom': {
      type: DataTypes.STRING,
    },
    'sexe': {
      type: DataTypes.STRING,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'ville': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'dateCreation': {
      type: DataTypes.DATE,
    },
    'antecedents': {
      type: DataTypes.STRING,
    },
    'insc': {
      type: DataTypes.STRING,
    },
    'caisse': {
      type: DataTypes.STRING,
    },
    'ald': {
      type: DataTypes.INTEGER,
    },
    'email': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'patient',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
  };

  return Model;
};

