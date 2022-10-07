// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "SpaceX",
      // URL to the GraphQL API
      url: "https://api.spacex.land/graphql/",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"],
  },
};
