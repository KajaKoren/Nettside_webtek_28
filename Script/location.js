// Initialize and add the map
function initMap() {
	// The location of Uluru
	const fruSvendsen = { lat: 62.20127215074459, lng: 6.124043156681972 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 13,
		center: fruSvendsen,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: fruSvendsen,
		map: map,
	});
}

window.initMap = initMap;
