//= require vendor/_shoestring-1_0_2.js
//= require _bucketeer.js

(function () {
  "use strict";
  $("html.isnt-js").removeClass("isnt-js").addClass("is-js")
  var $bucketeer = new Bucketeer($(".m-actions form"), $(".m-images .image"))
})();
