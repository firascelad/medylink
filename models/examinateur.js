module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('examinateur', {
    'id_pays': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_examinateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'b_alter_patient': {
      type: DataTypes.INTEGER,
    },
    'b_create_patient': {
      type: DataTypes.INTEGER,
    },
    'b_delete_examen': {
      type: DataTypes.INTEGER,
    },
    'b_initiative': {
      type: DataTypes.INTEGER,
    },
    'b_patient_rights': {
      type: DataTypes.INTEGER,
    },
    'b_select_patient': {
      type: DataTypes.INTEGER,
    },
    'b_alter_consult': {
      type: DataTypes.INTEGER,
    },
    'b_ask_diagnostic': {
      type: DataTypes.INTEGER,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'ide': {
      type: DataTypes.STRING,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'prenom': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'id_utilisateur': {
      type: DataTypes.INTEGER,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'mobile': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'examinateur',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
    Model.belongsTo(models.pays, {
      foreignKey: 'id_pays',
      targetKey: 'id_pays',
      as: '_id_pays',
    });
    
  };

  return Model;
};

