var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    alert("css")
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});
