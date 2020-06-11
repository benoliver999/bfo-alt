module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/css/main.css"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}
