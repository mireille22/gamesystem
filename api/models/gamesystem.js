'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameSystem = sequelize.define('GameSystem', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  GameSystem.associate = function(models) {
    // associations can be defined here
  };
  return GameSystem;
};