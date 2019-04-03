module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('motif_invitation', {
    'valeur': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'motif_invitation',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

