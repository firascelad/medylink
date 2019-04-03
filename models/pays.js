module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('pays', {
    'id_pays': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'nom_pays': {
      type: DataTypes.STRING,
    },
    'continent': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'pays',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

