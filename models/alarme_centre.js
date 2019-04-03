module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('alarme_centre', {
    'id_centre': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'if_wait_for_diag': {
      type: DataTypes.INTEGER,
    },
    'if_wait_for_invitation': {
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
    tableName: 'alarme_centre',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

