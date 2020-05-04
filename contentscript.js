// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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
      var r = confirm("Do you really want to open your email app? 🤔")
    	if (r == true) {
    		window.open(beforeLink, '_blank');
    	} else {
    	}

    });
  }
}

initListeners();