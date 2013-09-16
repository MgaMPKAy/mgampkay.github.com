var disqus_shortname = 'mgampkay';
var disqus_loaded = false;
function load_disqus() {
    if (disqus_loaded) return;

    var dsqdiv = document.createElement("div");
    dsqdiv.id = "disqus_thread";
    document.getElementById("comment").appendChild(dsqdiv);

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

    disqus_loaded = true;
}

$(document).ready(function() {
    // Add extra information to code blocks
    $('code').each(function(){
    	var title = $(this).attr("class");
            if(title != '' && title !== undefined){
                if(title.match('sourceCode')){
                    var title = title.split(' ')[1];
                };
		$(this).before('<span class="language">'+title+'</span>');
            }
    });

    // Load Disqus
    var windowHeigh = $(window).height();
    var bodyHeigh   = $("body").height();
    if (window.location.hostname == "127.0.0.1") {
        disqus_loaded = true;
    }
    if (bodyHeigh > windowHeigh) {
	setTimeout(load_disqus, 1000);
    } else {
        load_disqus();
    }

    // Show full source code
    $("pre").each(function(idx, elem) {

	var scrollWidth = elem.scrollWidth;
	var clientWidth = elem.clientWidth;
	if (scrollWidth > clientWidth) {
	    $(this).mouseover(function() {
		// Hack
		$(this).css("width", scrollWidth + 40);
	    });
	    $(this).mouseout(function() {
		// Hack
		$(this).css("width", clientWidth - 14);
	    });
	}
    });
});
