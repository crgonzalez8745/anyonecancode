module.exports = {
  publicPath: process.env.BASE_URL ? `/${process.env.BASE_URL}` : "/",
  pwa: {
    name: "Kattt",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
};
