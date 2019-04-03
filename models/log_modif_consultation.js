module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('log_modif_consultation', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_consultation': {
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
    tableName: 'log_modif_consultation',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

