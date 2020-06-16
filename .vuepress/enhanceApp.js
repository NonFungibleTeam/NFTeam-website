import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify, {
    theme: {
      primary: #ff5722,
      secondary: #607d8b,
      accent: #009688,
      error: #f44336,
      warning: #ff9800,
      info: #2196f3,
      success: #4caf50
    }
  });
  router.beforeEach((to, from, next) => {
    if (to.matched.length > 0 && to.matched[0].path === "*") {
      next("/404.html");
    } else {
      next();
    }
  });
};
