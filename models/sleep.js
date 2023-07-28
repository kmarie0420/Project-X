module.exports = (sequelize, DataTypes) => {
    const Sleep = sequelize.define('Sleep', {
      sleepDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wakeUpCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heartRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heartRateVariability: {
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
      timeSleeping: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sleepInterruptions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bodyTemperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    });
  
    return Sleep;
  };