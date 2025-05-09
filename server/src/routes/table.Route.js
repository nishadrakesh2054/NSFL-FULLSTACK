import express from "express";
import Table from "../models/fixture/table.Model.js";

const router = express.Router();
const handleErrorResponse = (res, error, defaultMessage, statusCode = 500) => {
  console.error(error);
  res.status(statusCode).json({
    success: false,
    error: error.message || defaultMessage,
  });
};

// GET league table sorted by points (descending)
router.get("/table", async (req, res) => {
  try {
    const table = await Table.findAll({
      order: [
        ["points", "DESC"],
        ["goalDifference", "DESC"],
        ["goalsFor", "DESC"],
        ["team_name", "ASC"],
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });

    if (!table.length) {
      return res.status(404).json({
        success: false,
        message: "League table data not found",
      });
    }

    // Add positions
    const tableWithPositions = table.map((team, index) => ({
      ...team.toJSON(),
      position: index + 1,
    }));

    res.status(200).json({
      success: true,
      count: tableWithPositions.length,
      data: tableWithPositions,
    });
  } catch (error) {
    handleErrorResponse(res, error, "league table");
  }
});

export default router;
