module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('alarme_responsable', {
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'if_examen_recieved': {
      type: DataTypes.INTEGER,
    },
    'if_diagnostic_done': {
      type: DataTypes.INTEGER,
    },
    'if_creation_consultation_examinateur': {
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
    'attach_exam_for_resp': {
      type: DataTypes.INTEGER,
    },
    'attach_exam_for_diag_request': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'alarme_responsable',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

