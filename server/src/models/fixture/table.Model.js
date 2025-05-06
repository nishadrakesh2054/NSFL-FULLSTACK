import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";

const Table = sequelize.define(
  "Table",
  {
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamLogo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    played: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    won: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    drawn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    goalsFor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    goalsAgainst: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    goalDifference: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    points: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.won * 3 + this.drawn;
      },
    },
    form: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
      get() {
        const rawValue = this.getDataValue("form");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("form", JSON.stringify(value));
      },
    },
    promotion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    relegation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    homeRecord: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
      },
      get() {
        const rawValue = this.getDataValue("homeRecord");
        return rawValue
          ? JSON.parse(rawValue)
          : {
              played: 0,
              won: 0,
              drawn: 0,
              lost: 0,
              goalsFor: 0,
              goalsAgainst: 0,
            };
      },
      set(value) {
        this.setDataValue("homeRecord", JSON.stringify(value));
      },
    },
    awayRecord: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
      },
      get() {
        const rawValue = this.getDataValue("awayRecord");
        return rawValue
          ? JSON.parse(rawValue)
          : {
              played: 0,
              won: 0,
              drawn: 0,
              lost: 0,
              goalsFor: 0,
              goalsAgainst: 0,
            };
      },
      set(value) {
        this.setDataValue("awayRecord", JSON.stringify(value));
      },
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "2023/24",
    },
    matchday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "tables",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Table;
