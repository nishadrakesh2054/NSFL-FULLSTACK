import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Highlight = sequelize.define("Highlights", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageKey: {
    type: DataTypes.STRING,
  },
  bucket: {
    type: DataTypes.STRING,
  },
  mime: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},{
    timestamps: true,
    tableName: "highlights",
  }
);

export default Highlight;
