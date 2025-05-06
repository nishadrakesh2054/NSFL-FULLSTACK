const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Team = require("./Team");

const Match = sequelize.define("Match", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Team,
      key: "id",
    },
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Team,
      key: "id",
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("upcoming", "live", "completed"),
    defaultValue: "upcoming",
  },
  homeTeamScore: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  awayTeamScore: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  streamUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Define associations
Match.belongsTo(Team, { as: "homeTeam", foreignKey: "homeTeamId" });
Match.belongsTo(Team, { as: "awayTeam", foreignKey: "awayTeamId" });

module.exports = Match;
