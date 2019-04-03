module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('piece_jointe', {
    'fk_id_operateur': {
      type: DataTypes.INTEGER,
    },
    'id_consultation': {
      type: DataTypes.INTEGER,
    },
    'id_piece_jointe': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'type_piece_jointe': {
      type: DataTypes.INTEGER,
    },
    'fichier': {
      type: DataTypes.STRING,
    },
    'nom_piece_jointe': {
      type: DataTypes.STRING,
    },
    'date_ajout': {
      type: DataTypes.DATE,
    },
    'modele': {
      type: DataTypes.STRING,
    },
    'date_operation': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'piece_jointe',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.consultation, {
      foreignKey: 'id_consultation',
      targetKey: 'id_consultation',
      as: '_id_consultation',
    });
    
    Model.belongsTo(models.utilisateur, {
      foreignKey: 'fk_id_operateur',
      targetKey: 'id_utilisateur',
      as: '_fk_id_operateur',
    });
    
  };

  return Model;
};

