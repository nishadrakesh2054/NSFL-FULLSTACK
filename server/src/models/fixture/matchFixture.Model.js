import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";
import Fixture from "./dateFixtures.Model.js";

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
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "fixture_date",
      references: {
        model: Fixture,
        key: "date",
      },
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "location",
    },
    status: {
      type: DataTypes.ENUM("upcoming", "completed"),
      defaultValue: "upcoming",
      allowNull: false,
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

Fixture.hasMany(matchFixture, { foreignKey: "fixture_date" });
matchFixture.belongsTo(Fixture, { foreignKey: "fixture_date" });

export default matchFixture;
