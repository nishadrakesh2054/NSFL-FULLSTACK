import express from "express";
import Match from "../models/fixture/matchFixture.Model.js";

const router = express.Router();
// Get all fixtures with correct status
router.get("/match", async (req, res) => {
  try {
    const fixtures = await Match.findAll();

    const updatedFixtures = fixtures.map((fixture) => {
      const fixtureData = fixture.toJSON();
      if (fixture.isCompleted()) {
        fixtureData.status = "completed";
      } else if (fixture.isLive()) {
        fixtureData.status = "today";
      } else if (fixture.isToday()) {
        fixtureData.status = "upcoming";
      }
      return fixtureData;
    });

    res.status(200).json({
      success: true,
      count: updatedFixtures.length,
      data: updatedFixtures,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
});
export default router;
