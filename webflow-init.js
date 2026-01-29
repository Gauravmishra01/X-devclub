/**
 * Webflow Modernizr Initialization
 * Detects JavaScript and touch capabilities and adds appropriate CSS classes
 */
!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o ||
      (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);
