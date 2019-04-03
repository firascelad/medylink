module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('proposition_expert', {
    'specialiteMedicale': {
      type: DataTypes.INTEGER,
    },
    'id_responsable': {
      type: DataTypes.INTEGER,
    },
    'id_propositionExpert': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'prenom': {
      type: DataTypes.STRING,
    },
    'adresse': {
      type: DataTypes.STRING,
    },
    'adresse2': {
      type: DataTypes.STRING,
    },
    'ville': {
      type: DataTypes.STRING,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'motivation': {
      type: DataTypes.INTEGER,
    },
    'motivationAutre': {
      type: DataTypes.STRING,
    },
    'dateReception': {
      type: DataTypes.DATE,
    },
    'dateAccord': {
      type: DataTypes.DATE,
    },
    'dateRefus': {
      type: DataTypes.DATE,
    },
    'resume': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'proposition_expert',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.responsable, {
      foreignKey: 'id_responsable',
      targetKey: 'id_responsable',
      as: '_id_responsable',
    });
    
    Model.belongsTo(models.type_specialiste, {
      foreignKey: 'specialiteMedicale',
      targetKey: 'code_param',
      as: '_specialiteMedicale',
    });
    
  };

  return Model;
};

