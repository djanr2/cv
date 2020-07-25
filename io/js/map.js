
(function($) {
  "use strict";


// Easytab setup

$('#wrapper').easytabs({
	animate			: true,
	updateHash		: false,
	transitionIn	:'fadeIn',
	transitionOut	:'fadeOut',
	animationSpeed	:100,
	tabActiveClass	:'active',
	tabs            :' #main-nav.tabbed > ul > li ',
	transitionInEasing: 'linear',
 	transitionOutEasing: 'linear'

});

// Instagram feed setup

var instaFeed = new Instafeed({
        get: 'user',
        userId: '8622487563',
        accessToken: '8622487563.239aaa2.9a0babde2b4247bfbcaf2fe06a55622e',
        resolution :'standard_resolution',
		limit: 5,
		template: '<li><a href="{{link}}"><img src="{{image}}"/></a></li>'
    });
instaFeed.run();

// Google map location

$('#wrapper').bind('easytabs:after', function() {

	var styles = [
		        {
		            stylers: [
		                { saturation: -100 }

		            ]
		        },{
		            featureType: 'road',
		            elementType: 'geometry',
		            stylers: [
		                { hue: "#74b7b0" },
		                { visibility: 'simplified' }
		            ]
		        },{
		            featureType: 'road',
		            elementType: 'labels',
		            stylers: [
		                { visibility: 'on' }
		            ]
		        }
		      ],

		       lat = -33.867487,
		       lng = 151.20699,

			  customMap = new google.maps.StyledMapType(styles,
	          {name: 'Styled Map'}),


	      mapOptions = {
	          zoom: 14,
			scrollwheel: false,
			disableDefaultUI: true,
	          center: new google.maps.LatLng( lat, lng ),
	          mapTypeControlOptions: {
	              mapTypeIds: [google.maps.MapTypeId.ROADMAP]
	          }
	      },
	      map = new google.maps.Map(document.getElementById('map'), mapOptions),
	      myLatlng = new google.maps.LatLng( lat, lng ),

	      marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
			icon: {
			            url: 'img/marker.png',
			            scaledSize: new google.maps.Size(35, 45)
			        }
	      });

	      map.mapTypes.set('map_style', customMap);
	      map.setMapTypeId('map_style');
	});

})(jQuery);
