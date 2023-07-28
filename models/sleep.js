

module.exports = (sequelize, DataTypes) => {
    const Sleep = sequelize.define('Sleep', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      }
    });
  
    return Sleep;
  };