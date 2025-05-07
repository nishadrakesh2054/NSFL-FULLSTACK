import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";

const matchFixture = sequelize.define(
  "MatchFixture",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "team_1",
    },
    homeTeamLogo: {
      type: DataTypes.STRING,
      field: "image1",
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "team_2",
    },
    awayTeamLogo: {
      type: DataTypes.STRING,
      field: "image2",
    },
    fixture_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,

    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    status: {
      type: DataTypes.ENUM("upcoming", "completed", "live"),
      defaultValue: "upcoming",
      allowNull: false,
    },
    scoreHome: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    scoreAway: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // Image metadata fields
    imageKey1: {
      type: DataTypes.STRING,
    },
    bucket1: {
      type: DataTypes.STRING,
    },
    mime1: {
      type: DataTypes.STRING,
    },
    imageKey2: {
      type: DataTypes.STRING,
    },
    bucket2: {
      type: DataTypes.STRING,
    },
    mime2: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "match_fixture",
    timestamps: true,
    paranoid: true,
  }
);

export default matchFixture;
