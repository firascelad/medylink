module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('consultation_mission', {
    'id_consultation': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_mission': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    tableName: 'consultation_mission',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

