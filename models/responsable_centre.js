module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('responsable_centre', {
    'id_responsable': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'id_centre': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'degre_urgence': {
      type: DataTypes.INTEGER,
    },
    'rappels_enabled': {
      type: DataTypes.INTEGER,
    },
    'nb_rappels': {
      type: DataTypes.INTEGER,
    },
    'rappels_intervals': {
      type: DataTypes.INTEGER,
    },
    'action_finale': {
      type: DataTypes.STRING,
    },
    'parametre_action_finale': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'responsable_centre',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

