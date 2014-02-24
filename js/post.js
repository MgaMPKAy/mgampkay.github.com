(function() {
    function load_disqus() {
	console.log("Loaded");
	var disqus_shortname = 'mgampkay';
	var dsqdiv = document.createElement("div");
	dsqdiv.id = "disqus_thread";
	document.getElementById("comment").appendChild(dsqdiv);

	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }

    function add_language_tag() {
	var codes = document.querySelectorAll("code");
	[].forEach.call(codes, function(elem) {
	    if (elem.classList.contains("sourceCode")) {
		var lang = elem.className.split(' ')[1];
		var s = document.createElement('span');
		s.classList.add("language");
		s.innerText = lang;
		elem.parentNode.insertBefore(s, elem);
	    }
	});
    }

    function load_disqus_when_necy() {
	if (window.location.hostname == "127.0.0.1") {
            return;
	}
	var windowHeigh = window.innerHeight;
	var bodyHeigh   = document.querySelector('body').offsetHeight;

	if (bodyHeigh > windowHeigh) {
	    setTimeout(load_disqus, 129);
	} else {
            load_disqus();
	}
    }

    function show_full_code() {
	var pres = document.querySelectorAll("pre");
	[].forEach.call(pres, function (elem) {
	    var scrollWidth = elem.scrollWidth;
	    var clientWidth = elem.clientWidth;
	    console.log(scrollWidth, clientWidth);
	    if (scrollWidth > clientWidth) {
		elem.addEventListener('mouseover', function() {
		    elem.style.width = scrollWidth + 40 + "px";
		}, false);
	    }
	})
    }

    if ("classList" in document.documentElement) {
	document.addEventListener("DOMContentLoaded", function() {
	    load_disqus_when_necy();
	    add_language_tag();
	    show_full_code();
	}, false);
    }
})()
