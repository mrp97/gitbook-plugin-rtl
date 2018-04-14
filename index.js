module.exports = {
    // Map of hooks
    hooks: {
      "page": function(page) {
        console.log("Plugin was injected");
        return page;
      }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
