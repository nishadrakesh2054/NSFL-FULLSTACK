import { DataTypes } from "sequelize";
import sequelize from "../../db/index.js";
import Player from "./player.Model.js";

const Record = sequelize.define(
  "Record",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    yellow_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    red_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Player,
        key: "id",
      },
    },
  },
  {
    tableName: "Records",
    timestamps: true,
    underscored: true,
  }
);

// Associations
Record.belongsTo(Player, {
  foreignKey: "player_id",
  as: "player",
});

Player.hasOne(Record, {
  foreignKey: "player_id",
  as: "record",
});

export default Record;
