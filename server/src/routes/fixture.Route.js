import express from "express";
import Team from "../models/fixture/team.Model.js";
import Player from "../models/fixture/player.Model.js";

const router = express.Router();
// Helper function for consistent error responses
const handleError = (res, error, entity) => {
  console.error(`Error fetching ${entity}:`, error);
  res.status(500).json({
    success: false,
    error: `Failed to fetch ${entity}`,
  });
};
// GET all teams
router.get("/teams", async (req, res) => {
  try {
    const teams = await Team.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["team_name", "ASC"]],
    });

    if (!teams.length) {
      return res.status(404).json({
        success: false,
        message: "No teams found",
      });
    }

    res.status(200).json({
      success: true,
      count: teams.length,
      data: teams,
    });
  } catch (error) {
    handleError(res, error, "teams");
  }
});

// GET single team by ID
router.get("/teams/:id", async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, {
      include: [
        {
          model: Player,
          as: "Players",
          attributes: [
            "id",
            "name",
            "position",
            "number",
            "img",
            "imageKey",
            "bucket",
            "mime",
          ],
        },
      ],
    });

    if (!team) {
      return res.status(404).json({
        success: false,
        error: `Team not found with id ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  } catch (error) {
    handleError(res, error, "team");
  }
});

// GET specific player from a specific team
router.get("/teams/:teamId/players/:playerId", async (req, res) => {
  try {
    const { teamId, playerId } = req.params;

    // First verify the team exists
    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(404).json({
        success: false,
        error: `Team not found with id ${teamId}`,
      });
    }

    // Then find the player that belongs to this team
    const player = await Player.findOne({
      where: {
        id: playerId,
        team_id: teamId, // Ensure the player belongs to the specified team
      },
      include: [
        {
          model: Team,
          as: "team", // Make sure this matches your association alias
          attributes: [
            "id",
            "team_name",
            "team_logo",
            "imageKey",
            "bucket",
            "mime",
          ],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!player) {
      return res.status(404).json({
        success: false,
        error: `Player not found with id ${playerId} in team ${teamId}`,
      });
    }

    res.status(200).json({
      success: true,
      data: player,
    });
  } catch (error) {
    handleError(res, error, "team player");
  }
});

// GET players by team ID(yo team maa total player kati xa show garx)
router.get("/teams/:id/players", async (req, res) => {
  try {
    const players = await Player.findAll({
      where: { team_id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["number", "ASC"]],
    });

    if (!players.length) {
      return res.status(404).json({
        success: false,
        message: `No players found for team ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      count: players.length,
      data: players,
    });
  } catch (error) {
    handleError(res, error, "team players");
  }
});

// GET single player by ID
router.get("/players/:id", async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id, {
      include: [
        {
          model: Team,
          as: "team",
          attributes: ["id", "team_name", "team_logo"],
        },
      ],
    });

    if (!player) {
      return res.status(404).json({
        success: false,
        error: `Player not found with id ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: player,
    });
  } catch (error) {
    handleError(res, error, "player");
  }
});

// GET all players
router.get("/players", async (req, res) => {
  try {
    const players = await Player.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Team,
          as: "team",
          attributes: ["id", "team_name", "team_logo"],
        },
      ],
      order: [["number", "ASC"]],
    });

    if (!players.length) {
      return res.status(404).json({
        success: false,
        message: "No players found",
      });
    }

    res.status(200).json({
      success: true,
      count: players.length,
      data: players,
    });
  } catch (error) {
    handleError(res, error, "players");
  }
});
export default router;
