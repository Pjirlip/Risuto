module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/globals.scss";`
        }
      }
    }
  };