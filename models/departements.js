module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('departements', {
    'id_departement': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'nom_departement': {
      type: DataTypes.STRING,
    },
    'num_departement': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'departements',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

