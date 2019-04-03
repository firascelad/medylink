module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('invitation', {
    'fk_id_responsable': {
      type: DataTypes.INTEGER,
    },
    'fk_id_expert': {
      type: DataTypes.INTEGER,
    },
    'fk_id_motif_refus': {
      type: DataTypes.INTEGER,
    },
    'qualification': {
      type: DataTypes.INTEGER,
    },
    'fk_id_administrateur': {
      type: DataTypes.INTEGER,
    },
    'emailAdministrateur': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'nom_correspondant': {
      type: DataTypes.STRING,
    },
    'prenom_correspondant': {
      type: DataTypes.STRING,
    },
    'type_correspondant': {
      type: DataTypes.STRING,
    },
    'type_administrateur': {
      type: DataTypes.STRING,
    },
    'date_invitation': {
      type: DataTypes.DATE,
    },
    'statut': {
      type: DataTypes.STRING,
    },
    'date_limite': {
      type: DataTypes.DATE,
    },
    'need_subscription': {
      type: DataTypes.INTEGER,
    },
    'message': {
      type: DataTypes.STRING,
    },
    'motif_message': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'invitation',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_administrateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_administrateur',
    });
    
    Model.belongsTo(models.type_specialiste, {
      foreignKey: 'qualification',
      targetKey: 'code_param',
      as: '_qualification',
    });
    
    Model.belongsTo(models.motif_invitation, {
      foreignKey: 'fk_id_motif_refus',
      
      as: '_fk_id_motif_refus',
    });
    
    Model.belongsTo(models.expert, {
      foreignKey: 'fk_id_expert',
      targetKey: 'id_expert',
      as: '_fk_id_expert',
    });
    
    Model.belongsTo(models.responsable, {
      foreignKey: 'fk_id_responsable',
      targetKey: 'id_responsable',
      as: '_fk_id_responsable',
    });
    
  };

  return Model;
};

