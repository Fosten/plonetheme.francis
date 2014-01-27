var $jnine = jQuery.noConflict();

(function ($) {
$(document).ready(function () {
	if($('.tabcontainer').size() > 0) {
		var tabs = new Array();
		var tab = null;
		var html = '<div id="tabs"><ul>';
		var tabTitle = null;
		var tabContent = null;
		var count = 1;
		$('<div id="tabhold"></div>').insertBefore($('.tabcontainer').get(0));
		$('.tabcontainer').each(function(){
			tabTitle = $(this).find('h5').text();
			tabContent = $(this).find('div').html();
			tabs.push({
				title: tabTitle,
				content: tabContent
			});
			html += '<li><a href="#tabs-'+count+'">'+tabTitle+'</a></li>';
			$(this).remove();
			count++;
		});
		html += '</ul>';
		count = 1;
		for(tab in tabs) {
			html += '<div id="tabs-'+count+'">'+tabs[tab].content+'</div>';
			count++;
		}
		$('#tabhold').append(html);
	}
	$("p:empty").remove();
	$jnine('#tabs').tabs();
    });
}) (jQuery);
