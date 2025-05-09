import AdminJSSequelize from "@adminjs/sequelize";
import uploadFeature from "@adminjs/upload";
import AdminJS from "adminjs";
// import { ComponentLoader } from "adminjs";
import { componentLoader } from "../components/componentsLoader.js";
import Team from "../models/fixture/team.Model.js";
import Player from "../models/fixture/player.Model.js";
import Record from "../models/fixture/record.Model.js";
import MatchFixture from "../models/fixture/matchFixture.Model.js";
import Table from "../models/fixture/table.Model.js";
AdminJS.registerAdapter(AdminJSSequelize);

// const componentLoader = new ComponentLoader();
const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

export const matchFixtureResource = {
  resource: MatchFixture,
  options: {
    navigation: { name: "Matches", icon: "Calendar" },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
    },
    listProperties: [
      "id",
      "fixture_date",
      "venue",
      "time",
      "homeTeam",
      "homeTeamLogo",
      "awayTeam",
      "awayTeamLogo",
      "status",
    ],
    showProperties: [
      "id",
      "homeTeam",
      "homeTeamLogo",
      "awayTeam",
      "awayTeamLogo",
      "fixture_date",
      "time",
      "venue",
      "status",
      "scoreHome",
      "scoreAway",
      "createdAt",
      "updatedAt",
    ],
    properties: {
      id: { isVisible: false, position: 1 },
      fixture_date: { isVisible: true, position: 2 },
      venue: { isVisible: true, position: 3 },
      time: { isVisible: true, position: 4 },
      homeTeam: { isVisible: true, position: 5 },
      homeTeamLogo: {
        type: "file",
        isVisible: { list: true, edit: true, filter: false, show: true },
        position: 6,
      },
      awayTeam: { isVisible: true, position: 7 },
      awayTeamLogo: {
        type: "file",
        isVisible: { list: true, edit: true, filter: false, show: true },
        position: 8,
      },
      status: { isVisible: true, position: 9 },
      scoreHome: { isVisible: true, position: 10 },
      scoreAway: { isVisible: true, position: 11 },
      createdAt: { isVisible: false, position: 12 },
      updatedAt: { isVisible: false, position: 13 },
      // Image metadata (hidden)
      imageKey1: { isVisible: false, position: 14 },
      bucket1: { isVisible: false, position: 15 },
      mime1: { isVisible: false, position: 16 },
      imageKey2: { isVisible: false, position: 17 },
      bucket2: { isVisible: false, position: 18 },
      mime2: { isVisible: false, position: 19 },
    },
  },
  features: [
    // Home team logo upload
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "homeTeamLogo",
        key: "imageKey1",
        bucket: "bucket1",
        mimeType: "mime1",
        filePath: "filePath1",
        filesToDelete: "filesToDelete1",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg"],
      },
    }),
    // Away team logo upload
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "awayTeamLogo",
        key: "imageKey2",
        bucket: "bucket2",
        mimeType: "mime2",
        filePath: "filePath2",
        filesToDelete: "filesToDelete2",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg"],
      },
      uploadPath(record, filename) {
        return `${filename}`;
      },
    }),
  ],
};

export const recordResource = {
  resource: Record,
  options: {
    navigation: { name: "Records", icon: "BarChart2" },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
    },
    listProperties: [
      "id",
      "player_id",
      "matches",
      "goals",
      "assists",
      "yellow_cards",
      "red_cards",
    ],
    showProperties: [
      "id",
      "player_id",
      "matches",
      "goals",
      "assists",
      "yellow_cards",
      "red_cards",
    ],
    properties: {
      id: { isVisible: false, position: 1 },
      player_id: {
        isVisible: true,
        position: 2,
        reference: "Players",
      },
      matches: {
        isVisible: true,
        position: 3,
        type: "number",
      },
      goals: {
        isVisible: true,
        position: 4,
        type: "number",
      },
      assists: {
        isVisible: true,
        position: 5,
        type: "number",
      },
      yellow_cards: {
        isVisible: true,
        position: 6,
        type: "number",
      },
      red_cards: {
        isVisible: true,
        position: 7,
        type: "number",
      },
      createdAt: { isVisible: false, position: 8 },
      updatedAt: { isVisible: false, position: 9 },
    },
  },
};

export const tableResource = {
  resource: Table,
  options: {
    navigation: { name: "League Table", icon: "Table" },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
    },
    listProperties: [
      "team_name",
      "team_logo",
      "played",
      "won",
      "drawn",
      "lost",
      "goalsFor",
      "goalsAgainst",
      "goalDifference",
      "points",
      "promotion",
      "relegation",
    ],
    showProperties: [
      "team_name",
      "team_logo",
      "played",
      "won",
      "drawn",
      "lost",
      "goalsFor",
      "goalsAgainst",
      "goalDifference",
      "points",
      // "form",
      "promotion",
      "relegation",
      // "homeRecord",
      // "awayRecord",
      "season",
    ],
    properties: {
      id: { isVisible: false, position: 1 },

      team_name: {
        isTitle: true,
        position: 3,
      },
      team_logo: {
        type: "file",
        isVisible: { list: true, edit: true, filter: false, show: true },
        position: 4,
      },
      played: {
        isVisible: true,
        position: 5,
        type: "number",
      },
      won: {
        isVisible: true,
        position: 6,
        type: "number",
      },
      drawn: {
        isVisible: true,
        position: 7,
        type: "number",
      },
      lost: {
        isVisible: true,
        position: 8,
        type: "number",
      },
      goalsFor: {
        isVisible: true,
        position: 9,
        type: "number",
      },
      goalsAgainst: {
        isVisible: true,
        position: 10,
        type: "number",
      },
      goalDifference: {
        isVisible: true,
        position: 11,
        type: "number",
      },
      points: {
        isVisible: true,
        position: 12,
        type: "number",
      },
      // form: {
      //   type: "mixed",
      //   isVisible: { list: false, edit: true, filter: false, show: true },
      //   position: 13,

      // },
      promotion: {
        isVisible: true,
        position: 14,
        type: "boolean",
      },
      relegation: {
        isVisible: true,
        position: 15,
        type: "boolean",
      },
      // homeRecord: {
      //   type: "mixed",
      //   isVisible: { list: false, edit: true, filter: false, show: true },
      //   position: 16,

      // },
      // awayRecord: {
      //   type: "mixed",
      //   isVisible: { list: false, edit: true, filter: false, show: true },
      //   position: 17,

      // },
      season: {
        isVisible: true,
        position: 18,
      },

      imageKey: {
        isVisible: false,
        position: 19,
      },
      bucket: {
        isVisible: false,
        position: 20,
      },
      mime: {
        isVisible: false,
        position: 21,
      },
      createdAt: {
        isVisible: false,
        position: 22,
      },
      updatedAt: {
        isVisible: false,
        position: 23,
      },
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "team_logo",
        key: "imageKey",
        bucket: "bucket",
        mimeType: "mime",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg", "image/webp"],
      },
      uploadPath(record, filename) {
        return `${filename}`;
      },
    }),
  ],
};
export const gameTeamResource = {
  resource: Team,
  options: {
    navigation: { name: "Teams", icon: "Users" },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
    },
    listProperties: [
      "id",
      "team_name",
      "team_logo",
      "team_manager",
      "founded",
      "stadium",
    ],
    showProperties: [
      "id",
      "team_name",
      "team_logo",
      "team_manager",
      "founded",
      "stadium",
    ],
    properties: {
      id: { isVisible: false, position: 1 },
      team_name: { isTitle: true, position: 2 },
      team_logo: {
        type: "file",
        isVisible: { list: true, edit: true, filter: false, show: true },
        position: 3,
      },
      team_details: {
        type: "textarea",
        isVisible: { list: false, edit: true, filter: false, show: true },
        props: { rows: 6 },
        position: 7,
      },
      team_manager: { isVisible: true, position: 6 },
      founded: { isVisible: true, position: 4 },
      stadium: { isVisible: true, position: 5 },
      createdAt: { isVisible: false, position: 8 },
      updatedAt: { isVisible: false, position: 9 },
      imageKey: { isVisible: false, position: 10 },
      bucket: { isVisible: false, position: 11 },
      mime: { isVisible: false, position: 12 },
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "team_logo",
        key: "imageKey",
        bucket: "bucket",
        mimeType: "mime",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg"],
      },
      uploadPath(record, filename) {
        return `${filename}`;
      },
    }),
  ],
};
export const playerResource = {
  resource: Player,
  options: {
    navigation: { name: "Players", icon: "User" },
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
      },
    },
    listProperties: [
      "id",
      "name",
      "img",
      "position",
      "number",
      "team_id",
      "nationality",
      "age",
    ],
    showProperties: [
      "id",
      "name",
      "img",
      "position",
      "number",
      "team_id",
      "nationality",
      "age",
      "height",
      "weight",
      "bio",
      "stats",
      "achievements",
    ],
    properties: {
      id: { isVisible: false, position: 1 },
      name: { isTitle: true, position: 2 },
      img: {
        type: "file",
        isVisible: { list: false, edit: true, filter: false, show: true },
        position: 3,
      },
      position: {
        isVisible: true,
        position: 4,
        availableValues: [
          { value: "Goalkeeper", label: "Goalkeeper" },
          { value: "Defender", label: "Defender" },
          { value: "Midfielder", label: "Midfielder" },
          { value: "Forward", label: "Forward" },
        ],
      },
      number: { isVisible: true, position: 5 },
      team_id: {
        isVisible: true,
        position: 6,
        reference: "Teams",
      },
      nationality: { isVisible: true, position: 7 },
      age: { isVisible: true, position: 8 },
      height: { isVisible: true, position: 9 },
      weight: { isVisible: true, position: 10 },
      bio: {
        type: "textarea",
        isVisible: { list: false, edit: true, filter: false, show: true },
        props: { rows: 4 },
        position: 11,
      },
      stats: {
        isVisible: { list: false, edit: true, filter: false, show: true },
        position: 12,
      },
      achievements: {
        type: "textarea",
        props: { rows: 4 },
        isVisible: { list: false, edit: true, filter: false, show: true },
        position: 13,
      },
      imageKey: { isVisible: false, position: 14 },
      bucket: { isVisible: false, position: 15 },
      mime: { isVisible: false, position: 16 },
      createdAt: { isVisible: false, position: 17 },
      updatedAt: { isVisible: false, position: 18 },
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "img",
        key: "imageKey",
        bucket: "bucket",
        mimeType: "mime",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg"],
      },
      uploadPath(record, filename) {
        return `${filename}`;
      },
    }),
  ],
};
