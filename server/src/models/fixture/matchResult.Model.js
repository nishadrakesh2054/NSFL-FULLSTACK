import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";
import matchFixture from "./matchFixture.Model.js";

const matchResult = sequelize.define(
  "MatchResult",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: matchFixture,
        key: "id",
      },
    },
    homeScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    awayScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    homeScorers: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
      get() {
        const rawValue = this.getDataValue("homeScorers");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("homeScorers", JSON.stringify(value));
      },
    },
    awayScorers: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
      get() {
        const rawValue = this.getDataValue("awayScorers");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("awayScorers", JSON.stringify(value));
      },
    },
    winner: {
      type: DataTypes.ENUM("home", "away", "draw"),
      allowNull: true,
    },
    matchStatus: {
      type: DataTypes.ENUM("full-time", "half-time", "extra-time", "penalties"),
      defaultValue: "full-time",
      allowNull: false,
    },
    additionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "match_results",
    timestamps: true,
    paranoid: true,
  }
);

// Set up associations
matchFixture.hasOne(matchResult, { foreignKey: "matchId" });
matchResult.belongsTo(matchFixture, { foreignKey: "matchId" });

export default matchResult;
