(function () {
    'use strict';

    function handleZoom() {
        if (document.documentElement.clientWidth !== window.innerWidth ||
            document.documentElement.clientHeight !== window.innerHeight) {
            document.body.style.zoom = 'reset';
        }
    }

    window.addEventListener('resize', handleZoom);
    handleZoom();
}());
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}