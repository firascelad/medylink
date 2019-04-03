module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('constante', {
    'fk_id_operateur': {
      type: DataTypes.INTEGER,
    },
    'id_constante': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'taille': {
      type: DataTypes.INTEGER,
    },
    'taSy': {
      type: DataTypes.INTEGER,
    },
    'taDi': {
      type: DataTypes.INTEGER,
    },
    'date_operation': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'constante',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_operateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_operateur',
    });
    
  };

  return Model;
};

