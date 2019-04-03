module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('alarme_examinateur', {
    'id_examinateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'if_examen_recieved': {
      type: DataTypes.INTEGER,
    },
    'mail': {
      type: DataTypes.INTEGER,
    },
    'vocal': {
      type: DataTypes.INTEGER,
    },
    'sms': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'alarme_examinateur',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

