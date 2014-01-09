if ("undefined" == typeof(Guten2)) { var Guten2 = {} }

Guten2.engines = {
  google: "https://www.google.com/search?q=%s",
  wikipedia: "https://en.wikipedia.org/wiki/%s"
}

Guten2.search = function(engine) {
  var selected = content.getSelection()
  var url = Guten2.engines[engine] 
  url = url.replace("%s", encodeURIComponent(selected))
  gBrowser.addTab(url)
}

// main
window.addEventListener("load", init, false);

function init() {
  var menu = document.getElementById("contentAreaContextMenu");
  menu.addEventListener("popupshowing", contextPopupShowing, false);
}

var contextPopupShowing = function(event) {
  document.getElementById("guten2-search").hidden = ! (gContextMenu.isTextSelected) 
}
