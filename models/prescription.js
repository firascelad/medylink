module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('prescription', {
    'id_patient': {
      type: DataTypes.INTEGER,
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
    },
    'id_prescription': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateDebut': {
      type: DataTypes.DATE,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'traitement': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'dateFin': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'prescription',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.consultation, {
      foreignKey: 'id_consultation',
      targetKey: 'id_consultation',
      as: '_id_consultation',
    });
    
    Model.belongsTo(models.patient, {
      foreignKey: 'id_patient',
      targetKey: 'id_patient',
      as: '_id_patient',
    });
    
  };

  return Model;
};

