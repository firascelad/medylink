module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('centre_consultation', {
    'id_centre': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'dateDemandeDiagnostic': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'dateDiagnostic': {
      type: DataTypes.DATE,
    },
    'vueResponsable': {
      type: DataTypes.INTEGER,
    },
    'context': {
      type: DataTypes.STRING,
    },
    'mode_partage': {
      type: DataTypes.STRING,
    },
    'partage_en_cours': {
      type: DataTypes.INTEGER,
    },
    'parametre_mode_partage': {
      type: DataTypes.STRING,
    },
    'dateLuExpert': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'centre_consultation',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

