module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.bingoral.app",
        productName: "Bingoral monitor",
        copyright: "Copyright © 2018 ${author}",
        linux: {
          target: "deb",
          icon: "./public/icons"
        },
        win: {
          target: "nsis",
          icon: "public\\icons\\icon.ico"
        },
        nsis: {
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          language: 2052,
        }
      }
    }
  }
}