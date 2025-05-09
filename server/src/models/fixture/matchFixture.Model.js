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
      type: DataTypes.ENUM("upcoming", "completed", "today"),
      defaultValue: "upcoming",
      allowNull: true,
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




// Add virtual fields for status updates
matchFixture.prototype.isToday = function () {
    const today = new Date().toISOString().split("T")[0];
    return this.fixture_date === today;
  };
  
  matchFixture.prototype.isCompleted = function () {
    return this.status === "completed";
  };
  
  matchFixture.prototype.isLive = function () {
    if (this.status === "completed") return false;
    const currentDate = new Date();
    const fixtureDate = new Date(`${this.fixture_date}T${this.time}`);
    return fixtureDate <= currentDate && !this.isCompleted();
  };

export default matchFixture;
