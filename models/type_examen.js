module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('type_examen', {
    'id_type_examen': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'code_acte': {
      type: DataTypes.STRING,
    },
    'nom_examen': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'type_examen',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

