const path = require('path')

module.exports = {
    publicPath: process.env.VUE_APP_STATIC_URL,
    outputDir: path.resolve(__dirname, "../backend/static"),
    indexPath: path.resolve(__dirname, "../backend/templates/", "index.html")
}