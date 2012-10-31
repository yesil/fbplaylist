// Copyright 2011 - ilyas Stéphane Türkben
var doIt = function(){
	var idx = 0;
    $('#contentArea .storyContent').each(function(idx){
		if(!this.getAttribute("id")){
			var storyId = "storyContent-"+idx;
			this.setAttribute("id", storyId);
			var v = $("#"+storyId+" .uiVideoThumb");
			if(v.length>0){
				var videoClickHandler = function(e){
					var closeHandler = function(){
						$("#storyContent-"+idx).remove();
					}
					$("#storyContent-"+idx).css("margin","20px");
					$("#fbplaylist").css("display","block");
					$("#"+storyId+" h6").css("width","400px");
					$('<a class="gapat" style="display:inline-block; color:red; background-color:black; width:32px; height:24px; text-align:center; vertical-align:middle;position: absolute;top: -10px;right: 10px;" title="close" href="#">X</a>').appendTo("#storyContent-"+idx);
					$("#"+storyId+" .storyInnerContent").css("width","410px");
					$("#"+storyId).css("margin-bottom","20px");
					var parent = $("#"+storyId).get(0).parentElement;
					$("#"+storyId).appendTo("#fbplaylist");
					parent.parentElement.removeChild(parent);
					$("#"+storyId+" .gapat").click(closeHandler);
				};
				v.click(videoClickHandler);
			}
		}
	}
	);
}
$(function() {
	doIt();
    $("#contentArea").bind('DOMSubtreeModified', doIt);
	document.body.insertAdjacentHTML("afterBegin", '<div id="fbplaylist" style="display:none; background-color:white; position:fixed; right:0px; z-index:99999; max-height:800px;overflow-y:auto;"></div>');
});

