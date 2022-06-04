/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@page": path.resolve(__dirname, "src/app/page"),
      "@api": path.resolve(__dirname, "src/app/api"),
      "@auth": path.resolve(__dirname, "src/app/auth"),
      "@contants": path.resolve(__dirname, "src/app/constants"),
      "@hooks": path.resolve(__dirname, "src/app/hooks"),
      "@interface": path.resolve(__dirname, "src/app/interface"),
      "@lib": path.resolve(__dirname, "src/app/lib"),
      "@routes": path.resolve(__dirname, "src/app/routes"),
      "@stores": path.resolve(__dirname, "src/app/stores"),
      "@types": path.resolve(__dirname, "src/app/types"),
      "@utils": path.resolve(__dirname, "src/app/utils"),
      "@mocks": path.resolve(__dirname, "src/app/__mocks__"),
      "@components": path.resolve(__dirname, "src/app/components"),

    }
  }
};
