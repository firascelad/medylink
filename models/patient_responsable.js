module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('patient_responsable', {
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateDemande': {
      type: DataTypes.DATE,
    },
    'dateConfirmation': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'patient_responsable',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

