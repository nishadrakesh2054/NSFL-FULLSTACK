import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import AdminJS from "adminjs";
import authenticate from "./authenticateUser.js";
import {
  userResource,
  ContactResource,
  NewsletterResource,
} from "./user.Resourse.js";
import { componentLoader, Components } from "../components/componentsLoader.js";
import { sponserResource } from "./blog.Resource.js";
import { blogResource } from "./blog.Resource.js";
import { highlightResource } from "./blog.Resource.js";
import { gameTeamResource } from "./games.Resource.js";

AdminJS.registerAdapter(AdminJSSequelize);

// Initialize AdminJS
const admin = new AdminJS({
  resources: [
    gameTeamResource,
    // GameFixtureResource,
    // FixtureResource,
    // ResultFixtureResource,
    // TableFixtureResource,
    // gameTeamResource,
    // playerResource,
    ContactResource,
    userResource,
    NewsletterResource,
    sponserResource,
    blogResource,
    highlightResource,
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
