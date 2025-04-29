import  Users  from "../models/user.Model.js";
import  Contact  from "../models/contact.Model.js";
import bcrypt from "bcrypt";

// Hashing function for passwords
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};


export const ContactResource = {
    resource: Contact,
    options: {
      navigation: { name: "Communications", icon: "Users" },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" ||
              currentAdmin.role === "League Manager" ||
              currentAdmin.role === "Finance Manager"),
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" ||
              currentAdmin.role === "League Manager" ||
              currentAdmin.role === "Finance Manager"),
        },
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" ||
              currentAdmin.role === "League Manager" ||
              currentAdmin.role === "Finance Manager"),
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" ||
              currentAdmin.role === "League Manager" ||
              currentAdmin.role === "Finance Manager"),
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "Admin" ||
              currentAdmin.role === "League Manager" ||
              currentAdmin.role === "Finance Manager"),
        },
      },
  
      properties: {
        message: {
          type: "textarea",
          props: {
            rows: 10,
          },
        },
      },
    },
  };

export const userResource = {
  resource: Users,
  options: {
    navigation: { name: "User Management", icon: "User" },
    actions: {
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
        before: async (request) => {
          if (request.payload?.password) {
            // Hash the password before saving a new user
            request.payload.password = await hashPassword(
              request.payload.password
            );
          }
          return request;
        },
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
        before: async (request) => {
          if (request.method === "post") {
            if (request.payload?.password) {
              // Hash the new password if it is being updated
              request.payload.password = await hashPassword(
                request.payload.password
              );
            } else {
              // If password is not provided, remove it from the payload to avoid overwriting with empty
              delete request.payload?.password;
            }
          }
          return request;
        },
      },
      show: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
        after: async (response) => {
          // Ensure the password is not shown in the show view
          response.record.params.password = "";
          return response;
        },
      },
      list: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "Admin",
        after: async (response) => {
          // Ensure the password is not shown in the list view
          response.records.forEach((record) => {
            record.params.password = "";
          });
          return response;
        },
      },
    },
    properties: {
      password: {
        isVisible: {
          list: false,
          filter: false,
          show: false,
          edit: true, // only show it in the edit view
        },
      },
    },
  },
};


