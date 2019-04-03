module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('examen_lu', {
    'id_examinateur': {
      type: DataTypes.INTEGER,
    },
    'id_examen': {
      type: DataTypes.INTEGER,
    },
    'dateLu': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'examen_lu',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.examen, {
      foreignKey: 'id_examen',
      targetKey: 'id_examen',
      as: '_id_examen',
    });
    
    Model.belongsTo(models.examinateur, {
      foreignKey: 'id_examinateur',
      targetKey: 'id_examinateur',
      as: '_id_examinateur',
    });
    
  };

  return Model;
};

