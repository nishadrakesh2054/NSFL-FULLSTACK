import AdminJSSequelize from "@adminjs/sequelize";
import uploadFeature from "@adminjs/upload";
import AdminJS from "adminjs";
import { componentLoader } from "../components/componentsLoader.js";
import Blog from "../models/blog.Model.js";
import Sponser from "../models/sponser.Model.js";
import Highlight from "../models/highlight.Model.js";

AdminJS.registerAdapter(AdminJSSequelize);

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

export const sponserResource = {
  resource: Sponser,
  options: {
    navigation: { name: "Sponsors", icon: "Star" },
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
    showProperties: ["id", "name", "logo", "website", "createdAt"],
    listProperties: ["id", "name", "logo", "website"],
    properties: {
      id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 1,
      },
      name: {
        position: 2,

        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      logo: {
        position: 3,
        type: "file",
        // isVisible: { list: true, edit: true, filter: false, show: true },
        isVisible: { list: false, show: false, edit: true },
      },
      website: {
        position: 4,
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      imageKey: {
        isVisible: false,
      },
      bucket: {
        isVisible: false,
      },
      mime: {
        isVisible: false,
      },
      createdAt: {
        position: 5,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        isVisible: false,
      },
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      properties: {
        file: "logo",
        key: "imageKey",
        bucket: "bucket",
        mimeType: "mime",
      },
      validation: {
        mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp"],
      },
    }),
  ],
};



export const blogResource = {
    resource: Blog,
    options: {
      navigation: { name: "Blogs", icon: "FileText" },
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
      listProperties: ["id", "title", "category", "image", "views", "date"],
      showProperties: [
        "id",
        "title",
        "content",
        "image",
        "category",
        "views",
        "date",
        "createdAt",
      ],
      properties: {
        id: {
          position: 1,
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        title: {
          position: 2,
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
        content: {
          position: 3,
          type: "richtext",
          isVisible: { list: false, filter: false, show: true, edit: true },
        },
        image: {
          position: 4,
          type: "file",
          isVisible: { list: false, filter: false, show: false, edit: true },
        },
        category: {
          position: 5,
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
        views: {
          position: 6,
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        date: {
          position: 7,
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
        imageKey: {
          isVisible: false,
        },
        bucket: {
          isVisible: false,
        },
        mime: {
          isVisible: false,
        },
        createdAt: {
          position: 8,
          isVisible: { list: false, filter: false, show: true, edit: false },
        },
        updatedAt: {
          isVisible: false,
        },
      },
    },
    features: [
      uploadFeature({
        componentLoader,
        provider: { local: localProvider },
        properties: {
          file: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp"],
        },
      }),
    ],
  };


  export const highlightResource = {
    resource: Highlight,
    options: {
      navigation: { name: "Media", icon: "PlayCircle" },
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
      listProperties: ["id", "title", "image", "date", "views", "duration"],
      showProperties: [
        "id",
        "title",
        "description",
        "image",
        "videoUrl",
        "duration",
        "date",
        "views",
        "createdAt",
      ],
      properties: {
        id: {
          position: 1,
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        title: {
          position: 2,
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
        description: {
          position: 3,
          type: "textarea",
          isVisible: { list: false, show: true, edit: true },
        },
        image: {
          position: 4,
          type: "file",
          isVisible: { list: false, show: false, edit: true },
        },
        videoUrl: {
          position: 5,
          isVisible: { list: false, show: true, edit: true },
        },
        duration: {
          position: 6,
          isVisible: { list: true, show: true, edit: true },
        },
        date: {
          position: 7,
          isVisible: { list: true, filter: true, show: true, edit: true },
        },
        views: {
          position: 8,
          isVisible: { list: true, show: true, edit: false },
        },
        imageKey: {
          isVisible: false,
        },
        bucket: {
          isVisible: false,
        },
        mime: {
          isVisible: false,
        },
        createdAt: {
          position: 9,
          isVisible: { list: false, show: true, edit: false },
        },
        updatedAt: {
          isVisible: false,
        },
      },
    },
    features: [
      uploadFeature({
        componentLoader,
        provider: { local: localProvider },
        properties: {
          file: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp"],
        },
      }),
    ],
  };

