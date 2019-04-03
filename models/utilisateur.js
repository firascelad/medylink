module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('utilisateur', {
    'id_utilisateur': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'lastConnection': {
      type: DataTypes.DATE,
    },
    'pseudo': {
      type: DataTypes.STRING,
    },
    'role': {
      type: DataTypes.INTEGER,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'mdpa': {
      type: DataTypes.STRING,
    },
    'mdpu': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'utilisateur',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    /*Model.belongsTo(models.responsable, {
      foreignKey: 'id_utilisateur',
      targetKey: 'id_utilisateur',
      as: '_id_utilisateur',
    });*/
    // Model.hasOne(models.responsable);
  };

  return Model;
};

