module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('sequence', {
    'SEQ_NAME': {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    'SEQ_COUNT': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'sequence',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

