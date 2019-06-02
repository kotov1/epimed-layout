
function createMap(){
	var responsiveCenter = 30.304843;
	if( $(window).width() < 1200 && $(window).width() > 767 ) {
		responsiveCenter -= 0.07;
	}
	var opts = {
		center: {
			lat: 59.93259,
			lng: responsiveCenter,
		},
		zoom: 11,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6a788d"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b2d0e3"},{"visibility":"on"}]}],
		maxZoom: 20,
		minZoom: 0,
		mapTypeId: 'roadmap',
	};

	
	opts.clickableIcons = false;
	opts.disableDoubleClickZoom = true;
	opts.draggable = true;
	opts.keyboardShortcuts = false;
	opts.scrollwheel = true;
	

	
	var setControlOptions = function(key, enabled, position, style, mapTypeIds){
		opts[key + 'Control'] = enabled;
		opts[key + 'ControlOptions'] = {
			position: google.maps.ControlPosition[position],
			style: google.maps.MapTypeControlStyle[style],
			mapTypeIds: mapTypeIds
		};
	};
	
		
	setControlOptions('fullscreen',false,'DEFAULT','',null);
	
		
	setControlOptions('mapType',false,'DEFAULT','DEFAULT',["roadmap","satellite","terrain"]);
	
		
	setControlOptions('rotate',false,'DEFAULT','',null);
	
		
	setControlOptions('scale',false,'','',null);
	
		
	setControlOptions('streetView',false,'DEFAULT','',null);
	
		
	setControlOptions('zoom',false,'DEFAULT','',null);
	

	var map = new google.maps.Map(document.getElementById('map'), opts);

	
	(function(){
		var markerOptions1 = {
			map: map,
			position: {
				lat: 59.978311,
				lng: 30.314715,
			}
		};
		
		markerOptions1.icon = {
			url: '../img/marker.png',
			scaledSize: new google.maps.Size(
				98,
				99),
			size: new google.maps.Size(
				98,
				99),
			anchor: new google.maps.Point(
				49,
				70)
		};
		markerOptions1.options = {
			optimized: true,
		};
		
		var markerOptions2 = {
			map: map,
			position: {
				lat: 59.879386,
				lng: 30.313824,
			}
		};
		
		markerOptions2.icon = {
			url: '../img/marker.png',
			scaledSize: new google.maps.Size(
				98,
				99),
			size: new google.maps.Size(
				98,
				99),
			anchor: new google.maps.Point(
				49,
				70)
		};
		markerOptions2.options = {
			optimized: true,
		};
		
		var marker1 = new google.maps.Marker(markerOptions1);
		var marker2 = new google.maps.Marker(markerOptions2);


	})();
	

};