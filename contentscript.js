function initListeners() {
  var anchors = $('a[href^="mailto:"]')
  console.log(anchors)

  for (var i=0; i<anchors.length;i++) {
    var anchor = anchors[i];
    if (typeof anchor !== 'object' || typeof anchor.addEventListener === 'undefined') {
      continue;
    }
    var beforeLink = anchor.href
    var link = beforeLink.substring(beforeLink.indexOf(":") + 1, beforeLink.indexOf("?"));
    $(anchor).removeAttr("href").css("cursor","pointer");
    $(anchor).on("click", function(e) {
    	var r = confirm("Are you sure you want to send an email to " + link + "?")
    	if (r == true) {
    		window.open(beforeLink, '_blank');
    	} else {
    	}

    });
  }
}

initListeners();
