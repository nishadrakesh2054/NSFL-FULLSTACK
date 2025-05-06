const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Team = sequelize.define("Team", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  played: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  won: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  drawn: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  lost: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  form: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
});

module.exports = Team;
