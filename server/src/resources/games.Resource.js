import AdminJSSequelize from "@adminjs/sequelize";
import uploadFeature from "@adminjs/upload";
import AdminJS from "adminjs";
// import { ComponentLoader } from "adminjs";
import { componentLoader } from "../components/componentsLoader.js";

// import Fixture from "../models/fixture/dateFixtures.Model.js";
// import ResultFixture from "../models/fixture/resultFixture.Model.js";
// import GameFixture from "../models/fixture/gameFixture.Model.js";
// import TableFixture from "../models/fixture/tableFixture.Model.js";
import Team from "../models/fixture/team.Model.js";
// import Player from "../models/fixture/player.Model.js";
AdminJS.registerAdapter(AdminJSSequelize);

// const componentLoader = new ComponentLoader();
const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
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
      id: { isVisible: true, position: 1 },
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
    }),
  ],
};

// export const GameFixtureResource = {
//   resource: GameFixture,
//   options: {
//     navigation: { name: "Games", icon: "Activity" },
//     actions: {
//       list: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       edit: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       new: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       show: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       delete: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//     },
//     properties: {
//       id: { isVisible: false },
//       fixture_date: { isVisible: true },
//       location: { isVisible: true },
//       time: { isVisible: true },
//       image1: {
//         type: "file",
//         isVisible: { list: true, edit: true, filter: true, show: true },
//       },
//       imageKey1: { isVisible: false },
//       bucket1: { isVisible: false },
//       mime1: { isVisible: false },

//       image2: {
//         type: "file",
//         isVisible: { list: true, edit: true, filter: true, show: true },
//       },
//       imageKey2: { isVisible: false },
//       bucket2: { isVisible: false },
//       mime2: { isVisible: false },
//     },
//   },
//   features: [
//     uploadFeature({
//       componentLoader,
//       provider: { local: localProvider },
//       properties: {
//         file: "image1",
//         key: "imageKey1",
//         bucket: "bucket1",
//         mimeType: "mime1",
//         filePath: "filePath1",
//         filesToDelete: "filesToDelete1",
//       },
//       validation: {
//         mimeTypes: ["image/png", "image/jpeg"],
//       },
//     }),

//     // Second upload feature for image2
//     uploadFeature({
//       componentLoader,
//       provider: { local: localProvider },
//       properties: {
//         file: "image2",
//         key: "imageKey2",
//         bucket: "bucket2",
//         mimeType: "mime2",
//         filePath: "filePath2",
//         filesToDelete: "filesToDelete2",
//       },
//       validation: {
//         mimeTypes: ["image/png", "image/jpeg"],
//       },
//     }),
//   ],
// };

// export const ResultFixtureResource = {
//   resource: ResultFixture,
//   options: {
//     navigation: { name: "Results", icon: "BarChart2" },
//     actions: {
//       list: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       edit: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       new: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       show: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       delete: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//     },
//     properties: {
//       id: { isVisible: false },
//       fixture_date: { isVisible: true },
//       location: { isVisible: true },
//       time: { isVisible: true },
//       image1: {
//         type: "file",
//         isVisible: { list: true, edit: true, filter: true, show: true },
//       },
//       imageKey1: { isVisible: false },
//       bucket1: { isVisible: false },
//       mime1: { isVisible: false },

//       image2: {
//         type: "file",
//         isVisible: { list: true, edit: true, filter: true, show: true },
//       },
//       imageKey2: { isVisible: false },
//       bucket2: { isVisible: false },
//       mime2: { isVisible: false },
//     },
//   },
//   features: [
//     uploadFeature({
//       componentLoader,
//       provider: { local: localProvider },
//       properties: {
//         file: "image1",
//         key: "imageKey1",
//         bucket: "bucket1",
//         mimeType: "mime1",
//         filePath: "filePath1",
//         filesToDelete: "filesToDelete1",
//       },
//       validation: {
//         mimeTypes: ["image/png", "image/jpeg"],
//       },
//     }),

//     // Second upload feature for image2
//     uploadFeature({
//       componentLoader,
//       provider: { local: localProvider },
//       properties: {
//         file: "image2",
//         key: "imageKey2",
//         bucket: "bucket2",
//         mimeType: "mime2",
//         filePath: "filePath2",
//         filesToDelete: "filesToDelete2",
//       },
//       validation: {
//         mimeTypes: ["image/png", "image/jpeg"],
//       },
//     }),
//   ],
// };

// export const TableFixtureResource = {
//   resource: TableFixture,
//   options: {
//     navigation: { name: "League Table", icon: "Award" },
//     properties: {
//       // Define the order of fields
//       id: { isVisible: false },
//       position: { position: 1 },
//       teamName: { position: 2 },
//       played: { position: 3 },
//       won: { position: 4 },
//       drawn: { position: 5 },
//       lost: { position: 6 },
//       GF: { position: 7 },
//       GA: { position: 8 },
//       GD: { position: 9 },
//       points: { position: 10 },
//     },
//     listProperties: [
//       "position",
//       "teamName",
//       "played",
//       "won",
//       "drawn",
//       "lost",
//       "GF",
//       "GA",
//       "GD",
//       "points", // Include points in the list view
//     ],
//     actions: {
//       list: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       edit: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       new: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       show: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       delete: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//     },
//   },
// };

// export const playerResource = {
//   resource: Player,
//   options: {
//     navigation: { name: "Players", icon: "User" },
//     actions: {
//       list: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       edit: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       new: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       show: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       delete: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//     },
//     properties: {
//       id: { isVisible: false },
//       teamId: {
//         isVisible: true,
//       },
//       player_image: {
//         type: "file",
//         isVisible: { list: true, edit: true, filter: true, show: true },
//       },
//       player_name: { isVisible: true },
//       updatedAt: { isVisible: false },
//       createdAt: { isVisible: false },
//       imageKey: { isVisible: false },
//       bucket: { isVisible: false },
//       mime: { isVisible: false },
//     },
//   },

//   features: [
//     uploadFeature({
//       componentLoader,
//       provider: { local: localProvider },
//       properties: {
//         file: "player_image",
//         key: "imageKey",
//         bucket: "bucket",
//         mimeType: "mime",
//       },
//       validation: {
//         mimeTypes: ["image/png", "image/jpeg"],
//       },
//     }),
//   ],
// };

// export const FixtureResource = {
//   resource: Fixture,
//   options: {
//     navigation: { name: "Fixtures", icon: "Calendar" },
//     actions: {
//       list: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       edit: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       new: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       show: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//       delete: {
//         isAccessible: ({ currentAdmin }) =>
//           currentAdmin && currentAdmin.role === "Admin",
//       },
//     },
//     properties: {
//       date: {
//         isVisible: true,
//       },
//     },
//   },
// };
