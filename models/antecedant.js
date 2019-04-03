module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('antecedant', {
    'id_antecedant': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'txt_antecedent': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'antecedant',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

