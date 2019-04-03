module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('mission', {
    'id_delegation': {
      type: DataTypes.INTEGER,
    },
    'id_mission': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'type_mission': {
      type: DataTypes.STRING,
    },
    'comm_mission': {
      type: DataTypes.STRING,
    },
    'comm_examinateur': {
      type: DataTypes.STRING,
    },
    'statut': {
      type: DataTypes.STRING,
    },
    'date_echeance': {
      type: DataTypes.DATE,
    },
    'date_created': {
      type: DataTypes.DATE,
    },
    'date_finished': {
      type: DataTypes.DATE,
    },
    'date_canceled': {
      type: DataTypes.DATE,
    },
    'date_updated': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'mission',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.delegation, {
      foreignKey: 'id_delegation',
      targetKey: 'id_delegation',
      as: '_id_delegation',
    });
    
  };

  return Model;
};

