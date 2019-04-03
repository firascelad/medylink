module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('centre', {
    'metier': {
      type: DataTypes.INTEGER,
    },
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'id_centre': {
      type: DataTypes.INTEGER,
      primaryKey: true 
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
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'fax': {
      type: DataTypes.STRING,
    },
    'mobileResponsable': {
      type: DataTypes.STRING,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'responsable': {
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
    'codeEtablissementSante': {
      type: DataTypes.STRING,
    },
    'id_disponibilite': {
      type: DataTypes.INTEGER,
    },
    'id_visibilite': {
      type: DataTypes.INTEGER,
    },
    'displayMore': {
      type: DataTypes.INTEGER,
    },
    'sendMonthlyReport': {
      type: DataTypes.INTEGER,
    },
    'correspondent_details': {
      type: DataTypes.STRING,
    },
    'afficher_detail_annuaire': {
      type: DataTypes.INTEGER,
    },
    'afficher_detail_dans_demande_avis': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'centre',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
    Model.belongsTo(models.type_specialiste, {
      foreignKey: 'metier',
      targetKey: 'code_param',
      as: '_metier',
    });
    
    
  };

  return Model;
};

