module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('antecedant_patient', {
    'id_antecedant': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateAjout': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
  }, {
    tableName: 'antecedant_patient',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

