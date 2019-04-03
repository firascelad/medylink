module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('consultation', {
    'id_delegation': {
      type: DataTypes.INTEGER,
    },
    'fk_id_operateur': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_patient': {
      type: DataTypes.INTEGER,
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateConsultation': {
      type: DataTypes.DATE,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'txt_consultation': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'degreUrgence': {
      type: DataTypes.INTEGER,
    },
    'txt_diagnostic': {
      type: DataTypes.STRING,
    },
    'symptome_autre': {
      type: DataTypes.STRING,
    },
    'type_consultation': {
      type: DataTypes.INTEGER,
    },
    'date_operation': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'consultation',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.patient, {
      foreignKey: 'id_patient',
      targetKey: 'id_patient',
      as: '_id_patient',
    });
    
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_operateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_operateur',
    });
    
    Model.belongsTo(models.delegation, {
      foreignKey: 'id_delegation',
      targetKey: 'id_delegation',
      as: '_id_delegation',
    });
    
  };

  return Model;
};

