var cheerio = require('cheerio');

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
      page: function(page) {
        var elements = ['h1','h2','h3','h4','h5','h6','p'];
        var $ = cheerio.load(page.content);
        elements.forEach(function(element){
          $(element).each(function(i, elem){
            console.log(elem);
            const $this = $(this);
            if(checkPersian($this.text().trimLeft().charAt(0))){
              $this.attr("dir","rtl")
            } else {
            }
          })
        });

        page.content = $.html();
        return page;
      }
    }
};
