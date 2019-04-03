module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('consultation_symptome', {
    'id_symptome': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    tableName: 'consultation_symptome',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

