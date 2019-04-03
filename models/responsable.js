module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('responsable', {
    'id_ftp_account': {
      type: DataTypes.INTEGER,
    },
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'b_delete_allowed': {
      type: DataTypes.INTEGER,
    },
    'b_diag_rights': {
      type: DataTypes.INTEGER,
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
    'codePrescripteur': {
      type: DataTypes.STRING,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'mobileResponsable': {
      type: DataTypes.STRING,
    },
    'nomCompte': {
      type: DataTypes.STRING,
    },
    'nomResponsable': {
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
    'id_utilisateur': {
      type: DataTypes.INTEGER,
    },
    'prenomResponsable': {
      type: DataTypes.STRING,
    },
    'civiliteResponsable': {
      type: DataTypes.STRING,
    },
    'degreUrgenceMax': {
      type: DataTypes.INTEGER,
    },
    'hasExaminateur': {
      type: DataTypes.INTEGER,
    },
    'hprimParser': {
      type: DataTypes.INTEGER,
    },
    'sendMonthlyReport': {
      type: DataTypes.INTEGER,
    },
    'diagnostic_automatique_materiel_visible': {
      type: DataTypes.INTEGER,
    },
    'mode_partage_prefere': {
      type: DataTypes.STRING,
    },
    'parametre_mode_partage_prefere': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'responsable',
    underscored: true,
    timestamps: false,
    
  });
  Model.associate = (models) => {
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
    /*Model.belongsTo(models.ftp, {
      foreignKey: 'id_ftp_account',
      targetKey: 'id_ftpAccount',
      as: 'id_ftp_account',
    });*/
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'id_utilisateur',
      targetKey: 'id_utilisateur',
      as: 'utilisateur',
    });
  };


  return Model;
};

