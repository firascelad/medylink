module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('delegation', {
    'id_patient': {
      type: DataTypes.INTEGER,
    },
    'id_examinateur': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_delegation': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'sujet': {
      type: DataTypes.STRING,
    },
    'comm_examinateur': {
      type: DataTypes.STRING,
    },
    'statut': {
      type: DataTypes.STRING,
    },
    'date_created': {
      type: DataTypes.DATE,
    },
    'date_read': {
      type: DataTypes.DATE,
    },
    'date_finalized': {
      type: DataTypes.DATE,
    },
    'date_canceled': {
      type: DataTypes.DATE,
    },
    'date_closed': {
      type: DataTypes.DATE,
    },
    'date_read_responsable': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'delegation',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
    Model.belongsTo(models.examinateur, {
      foreignKey: 'id_examinateur',
      targetKey: 'id_examinateur',
      as: '_id_examinateur',
    });
    
    Model.belongsTo(models.patient, {
      foreignKey: 'id_patient',
      targetKey: 'id_patient',
      as: '_id_patient',
    });
    
  };

  return Model;
};

