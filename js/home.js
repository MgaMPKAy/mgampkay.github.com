$(document).ready(function(){
    $(".post-date").each(function(idx, ele) {
	$(ele).text($.timeago($(ele).text()));
    });
});
