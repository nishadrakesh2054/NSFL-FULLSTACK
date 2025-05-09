import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";

const Table = sequelize.define(
  "Table",
  {
 
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team_logo: {
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
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },

    // form: {
    //     type: DataTypes.TEXT,
    //     allowNull: true,
    //     defaultValue: "[]",
    //     get() {
    //       return JSON.parse(this.getDataValue("form") || "[]");
    //     },
    //     set(value) {
    //       this.setDataValue("form", JSON.stringify(value));
    //     },
    //   },

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
    // homeRecord: {
    //     type: DataTypes.TEXT,
    //     allowNull: true,
    //     defaultValue: JSON.stringify({
    //       played: 0,
    //       won: 0,
    //       drawn: 0,
    //       lost: 0,
    //       goalsFor: 0,
    //       goalsAgainst: 0,
    //     }),
    //     get() {
    //       return JSON.parse(this.getDataValue("homeRecord") || "{}");
    //     },
    //     set(value) {
    //       this.setDataValue("homeRecord", JSON.stringify(value));
    //     },
    //   },
    //   awayRecord: {
    //     type: DataTypes.TEXT,
    //     allowNull: true,
    //     defaultValue: JSON.stringify({
    //       played: 0,
    //       won: 0,
    //       drawn: 0,
    //       lost: 0,
    //       goalsFor: 0,
    //       goalsAgainst: 0,
    //     }),
    //     get() {
    //       return JSON.parse(this.getDataValue("awayRecord") || "{}");
    //     },
    //     set(value) {
    //       this.setDataValue("awayRecord", JSON.stringify(value));
    //     },
    //   },

    season: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "2023/24",
    },

    imageKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bucket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "tables",
    timestamps: true,
    paranoid: true,
  }
);
// Hook to calculate points before saving
Table.beforeSave((team) => {
  team.points = (team.won * 3) + team.drawn;
  team.goalDifference = team.goalsFor - team.goalsAgainst;
});
export default Table;
