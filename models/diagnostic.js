module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('diagnostic', {
    'id_expert': {
      type: DataTypes.INTEGER,
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
    },
    'id_diagnostic': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'centreExpert': {
      type: DataTypes.STRING,
    },
    'dateDiagnostic': {
      type: DataTypes.DATE,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'diagnostic': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'indiceConfiance': {
      type: DataTypes.INTEGER,
    },
    'context': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'diagnostic',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.consultation, {
      foreignKey: 'id_consultation',
      targetKey: 'id_consultation',
      as: '_id_consultation',
    });
    
    Model.belongsTo(models.expert, {
      foreignKey: 'id_expert',
      targetKey: 'id_expert',
      as: '_id_expert',
    });
    
  };

  return Model;
};

