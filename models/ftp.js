module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('ftp', {
    'id_ftpAccount': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'deleted': {
      type: DataTypes.INTEGER,
    },
    'ftp_accountName': {
      type: DataTypes.STRING,
    },
    'ftp_mode': {
      type: DataTypes.INTEGER,
    },
    'ftp_port': {
      type: DataTypes.INTEGER,
    },
    'ftp_pwd': {
      type: DataTypes.STRING,
    },
    'ftp_serveurIp': {
      type: DataTypes.STRING,
    },
    'ftp_un': {
      type: DataTypes.STRING,
    },
    'vlock': {
      type: DataTypes.INTEGER,
    },
    'logo': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'ftp',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

