module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('expert', {
    'id_centre': {
      type: DataTypes.INTEGER,
    },
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'id_expert': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'b_expert_forward': {
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
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'fax': {
      type: DataTypes.STRING,
    },
    'metier': {
      type: DataTypes.INTEGER,
    },
    'mobile': {
      type: DataTypes.STRING,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'prenom': {
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
    'codePrescripteur': {
      type: DataTypes.STRING,
    },
    'id_disponibilite': {
      type: DataTypes.INTEGER,
    },
    'id_visibilite': {
      type: DataTypes.INTEGER,
    },
    'degreUrgenceMin': {
      type: DataTypes.INTEGER,
    },
    'degreUrgenceMax': {
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
    tableName: 'expert',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
    Model.belongsTo(models.centre, {
      foreignKey: 'id_centre',
      targetKey: 'id_centre',
      as: '_id_centre',
    });
    
  };

  return Model;
};

