module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('patient_pathologie', {
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_pathologie': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'ordre': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'patient_pathologie',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

