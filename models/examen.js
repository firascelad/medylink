module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('examen', {
    'fk_id_operateur': {
      type: DataTypes.INTEGER,
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_materiel': {
      type: DataTypes.INTEGER,
    },
    'id_examinateur': {
      type: DataTypes.INTEGER,
    },
    'id_patient': {
      type: DataTypes.INTEGER,
    },
    'id_examen': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_type_examen': {
      type: DataTypes.INTEGER,
    },
    'dateArrive': {
      type: DataTypes.DATE,
    },
    'dateEnregistrement': {
      type: DataTypes.DATE,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'fichier': {
      type: DataTypes.STRING,
    },
    'ref_patient': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'ref_examinateur': {
      type: DataTypes.STRING,
    },
    'vueResponsable': {
      type: DataTypes.INTEGER,
    },
    'diagnostic_automatique_materiel': {
      type: DataTypes.STRING,
    },
    'date_operation': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'examen',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.patient, {
      foreignKey: 'id_patient',
      targetKey: 'id_patient',
      as: '_id_patient',
    });
    
    Model.belongsTo(models.examinateur, {
      foreignKey: 'id_examinateur',
      targetKey: 'id_examinateur',
      as: '_id_examinateur',
    });
    
    Model.belongsTo(models.materiel, {
      foreignKey: 'id_materiel',
      targetKey: 'id_materiel',
      as: '_id_materiel',
    });
    
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
    Model.belongsTo(models.consultation, {
      foreignKey: 'id_consultation',
      targetKey: 'id_consultation',
      as: '_id_consultation',
    });
    
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_operateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_operateur',
    });
    
  };

  return Model;
};

