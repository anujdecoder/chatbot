import admin from "firebase-admin";
import { defineConfig } from "cypress";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";
import serviceAccountKey from "./serviceAccount.json";

export default defineConfig({
  e2e: {
    baseUrl: "https://ava-chatbot-f2551.web.app/",
    setupNodeEvents(on, config) {
      return cypressFirebasePlugin(on, config, admin, {
        projectId: serviceAccountKey.project_id,
      });
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
