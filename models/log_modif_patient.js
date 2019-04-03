module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_modif_patient', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateModification': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'typeModification': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'log_modif_patient',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

