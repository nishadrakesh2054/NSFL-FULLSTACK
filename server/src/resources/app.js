import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import AdminJS from "adminjs";
import authenticate from "./authenticateUser.js";
import { userResource, ContactResource } from "./user.Resourse.js";
import { componentLoader, Components } from "../components/componentsLoader.js";

import {
  FixtureResource,
  ResultFixtureResource,
  TableFixtureResource,
  gameTeamResource,
  playerResource,
  GameFixtureResource,
} from "./models.Resource.js";

AdminJS.registerAdapter(AdminJSSequelize);

// Initialize AdminJS
const admin = new AdminJS({
  resources: [
    GameFixtureResource,
    FixtureResource,
    ResultFixtureResource,
    TableFixtureResource,
    gameTeamResource,
    playerResource,
    ContactResource,
    userResource,
  ],
  rootPath: "/admin",
  branding: {
    companyName: "NEPAL SCHOOL FOOTBALL LEAGUE",
    logo: "/nsflbg.png",
    softwareBrothers: false,
  },
  assets: {
    styles: ["/css/custom.css"],
  },
  componentLoader,
  dashboard: {
    component: Components.dashboard,
  },
});

admin.watch();
// Set up the authentication middleware
const auth = {
  authenticate,
  cookieName: "adminjs",
  cookiePassword: process.env.COOKIE_PASSWORD || "some-secret-password",
};

// Build AdminJS router with authentication
const router = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  auth,
  AdminJSExpress.options
);

console.log("AdminJS initialized");

export default router;
