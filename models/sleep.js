const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sleep_Duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wakeup_Count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heart_Rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heartrate_Variability: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    respiration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    snoring: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    time_Sleeping: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sleep_Interruptions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body_Temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
  },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sleep',
  }
);

module.exports = Sleep;