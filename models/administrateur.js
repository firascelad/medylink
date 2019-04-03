module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('administrateur', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
    },
    'id_administrateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'type_admin': {
      type: DataTypes.INTEGER,
    },
    'nom': {
      type: DataTypes.STRING,
    },
    'prenom': {
      type: DataTypes.STRING,
    },
    'mail': {
      type: DataTypes.STRING,
    },
    'tel': {
      type: DataTypes.STRING,
    },
    'mobile': {
      type: DataTypes.STRING,
    },
    'societe': {
      type: DataTypes.STRING,
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'administrateur',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'id_utilisateur',
      targetKey: 'id_utilisateur',
      as: '_id_utilisateur',
    });
    
  };

  return Model;
};

