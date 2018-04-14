var cheerio = require('cheerio');

function makeRTL(text){
  var elements = ['h1','h2','h3','h4','h5','h6','p'];
  var $$ = cheerio.load(text);

  elements.forEach(function(element){
    $$('section').find(element).each(function(i, elem){
      if(checkPersian($$(this).text().trimLeft().charAt(0))){
        $$(this).attr('style','text-align:right;')
      } else {
        $$(this).attr('style','text-align:left;')
      }
    })
  });

  return $$.html();
}

function checkPersian(str){
  var p = /^[\u0600-\u06FF\s]+$/;
   if ( p.test(str) ) {
     return true
   } else {
     return false
   }
}


module.exports = {
    // Map of hooks
    hooks: {
      "page": function(page) {
        return makeRTL(page.content);
      }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
