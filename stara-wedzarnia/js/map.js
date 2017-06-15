function initMap() {
	var uluru = {lat: 52.735111, lng: 19.998694};        
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: uluru,
		zoomControl: false,
    scrollwheel: false,  
		styles: [
		{elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},           
		{elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
		{elementType: 'labels.text.stroke', stylers: [{color: '#f5f5f5'}]},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [{color: '#bdbdbd'}]
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{color: '#eeeeee'}]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{color: '#757575'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{color: '#e5e5e5'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{color: '#9e9e9e'}]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{color: '#ffffff'}]
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.fill',
			stylers: [{color: '#757575'}]
		},            
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{color: '#dadada'}]
		},            
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{color: '#616161'}]
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [{color: '#9e9e9e'}]
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [{color: '#e5e5e5'}]
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [{color: '#eeeeee'}]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{color: '#c9c9c9'}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{color: '#c9c9c9'}]
		},
		]
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map, 
		draggable: true,
		animation: google.maps.Animation.DROP,
		title: 'GrillBar',
		icon: {
			url: "img/marker.png",
			scaledSize: new google.maps.Size(64, 64)
		}
	});
	marker.addListener('click', toggleBounce);
}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

