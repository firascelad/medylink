module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('constante_ref', {
    'id_patient': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'type_constante': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'date_definition': {
      type: DataTypes.DATE,
      primaryKey: true 
    },
    'valueRef': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'constante_ref',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

