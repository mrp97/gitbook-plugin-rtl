var cheerio = require('cheerio');
var context = `<div class="page-inner">

<div id="book-search-results">
    <div class="search-noresults">

                                <section class="normal markdown-section">

                                <h5 id="21-for-the-following-c-statement-write-the-corresponding-legv8-assembly-code-assume-that-the-c-variables-f-g-and-h-have-already-been-placed-in-registers-x0-x1-and-x2-respectively-use-a-minimal-number-of-legv8-assembly-instructions">2.1 For the following C statement, write the corresponding LEGv8 assembly code. Assume that the C variables f, g, and h, have already been placed in registers X0, X1, and X2 respectively. Use a minimal number of LEGv8 assembly instructions.</h5>
<h5 id="f--g--h-−-5">f = g + (h − 5);</h5>
<p class="comments-section"><strong>Solution:</strong><div class="comments-icon"><div class="marker">+</div></div></p>
<pre><code>SUBI X10, X2, #5     // temp reg X10 = h - 5
ADD X0, X1, X10    // f = g + (h - 5)
</code></pre><hr>
<h5 id="22-write-a-single-c-statement-that-corresponds-to-the-two-legv8-assembly-instructions-below">2.2 Write a single C statement that corresponds to the two LEGv8 assembly instructions below.</h5>
<h5 id="add-f-g-h">ADD f, g, h</h5>
<h5 id="add-f-i-f">ADD f, i, f</h5>
<p class="comments-section"><strong>بolution:</strong><div class="comments-icon"><div class="marker">+</div></div></p>
<p class="comments-section"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>A</mi><mi>D</mi><mi>D</mi><mi>f</mi><mo separator="true">,</mo><mi>g</mi><mo separator="true">,</mo><mi>h</mi></mrow><annotation encoding="application/x-tex">ADDf,g,h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.69444em;"></span><span class="strut bottom" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="base textstyle uncramped"><span class="mord mathit">A</span><span class="mord mathit" style="margin-right:0.02778em;">D</span><span class="mord mathit" style="margin-right:0.02778em;">D</span><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mpunct">,</span><span class="mord mathit">h</span></span></span></span> means <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>=</mo><mi>g</mi><mo>+</mo><mi>h</mi></mrow><annotation encoding="application/x-tex"> f=g+h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.69444em;"></span><span class="strut bottom" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mrel">=</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mbin">+</span><span class="mord mathit">h</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>A</mi><mi>D</mi><mi>D</mi><mi>f</mi><mo separator="true">,</mo><mi>i</mi><mo separator="true">,</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">ADDf,i,f </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.69444em;"></span><span class="strut bottom" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="base textstyle uncramped"><span class="mord mathit">A</span><span class="mord mathit" style="margin-right:0.02778em;">D</span><span class="mord mathit" style="margin-right:0.02778em;">D</span><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mpunct">,</span><span class="mord mathit">i</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.10764em;">f</span></span></span></span> means  <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>f</mi><mo>=</mo><mi>i</mi><mo>+</mo><mi>f</mi><mo>=</mo><mi>i</mi><mo>+</mo><mi>g</mi><mo>+</mo><mi>h</mi></mrow><annotation encoding="application/x-tex">f=i+f=i+g+h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.69444em;"></span><span class="strut bottom" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mrel">=</span><span class="mord mathit">i</span><span class="mbin">+</span><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mrel">=</span><span class="mord mathit">i</span><span class="mbin">+</span><span class="mord mathit" style="margin-right:0.03588em;">g</span><span class="mbin">+</span><span class="mord mathit">h</span></span></span></span>. So, in C, we could write:<div class="comments-icon"><div class="marker">+</div></div></p>
<p class="comments-section"><code>f = g + h + i</code><div class="comments-icon"><div class="marker">+</div></div></p>
<hr>


                                </section>

    </div>
    <div class="search-results">
        <div class="has-results">

            <h1 class="search-results-title"><span class="search-results-count"></span> results matching "<span class="search-query"></span>"</h1>
            <ul class="search-results-list"></ul>

        </div>
        <div class="no-results">

            <h1 class="search-results-title">No results matching "<span class="search-query"></span>"</h1>

        </div>
    </div>
</div>

                        </div>`;

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
