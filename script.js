document.addEventListener('DOMContentLoaded', function () {
    const tourLocations = [
        { lat: 29.7604, lon: -95.3698, date: 'Jul. 12, 2024', venue: '713 Music Hall, Houston, TX' },
        { lat: 30.2672, lon: -97.7431, date: 'Jul. 13, 2024', venue: "Stubb's Waller Creek Amphitheater, Austin, TX" },
        { lat: 32.7767, lon: -96.7970, date: 'Jul. 14, 2024', venue: 'The Factory In Deep Ellum, Dallas, TX' },
        { lat: 33.4484, lon: -112.0740, date: 'Jul. 16, 2024', venue: 'Phoenix, AZ' },
        { lat: 33.8366, lon: -117.9143, date: 'Jul. 17, 2024', venue: 'Anaheim, CA' },
        { lat: 32.7157, lon: -117.1611, date: 'Jul. 19, 2024', venue: 'SOMA, San Diego, CA' },
        { lat: 34.0522, lon: -118.2437, date: 'Jul. 20, 2024', venue: 'Shrine Auditorium and Expo Hall, Los Angeles, CA' },
        { lat: 34.0522, lon: -118.2437, date: 'Jul. 21, 2024', venue: 'Shrine Auditorium and Expo Hall, Los Angeles, CA' },
        { lat: 37.7749, lon: -122.4194, date: 'Jul. 23, 2024', venue: 'The Warfield, San Francisco, CA' },
        { lat: 37.7749, lon: -122.4194, date: 'Jul. 24, 2024', venue: 'The Warfield, San Francisco, CA' },
        { lat: 45.5051, lon: -122.6750, date: 'Jul. 26, 2024', venue: 'Roseland Theater, Portland, OR' },
        { lat: 47.6062, lon: -122.3321, date: 'Jul. 27, 2024', venue: 'Showbox SoDo, Seattle, WA' },
        { lat: 47.6062, lon: -122.3321, date: 'Jul. 28, 2024', venue: 'Showbox SoDo, Seattle, WA' },
        { lat: 49.2827, lon: -123.1207, date: 'Jul. 29, 2024', venue: 'PNE Forum, Vancouver, BC' },
        { lat: 40.7608, lon: -111.8910, date: 'Jul. 31, 2024', venue: 'The Union Event Center, Salt Lake City, UT' },
        { lat: 39.7392, lon: -104.9903, date: 'Aug. 1, 2024', venue: 'Mission Ballroom, Denver, CO' },
        { lat: 44.9778, lon: -93.2650, date: 'Aug. 3, 2024', venue: 'The Fillmore Minneapolis, Minneapolis, MN' },
        { lat: 39.0997, lon: -94.5786, date: 'Aug. 4, 2024', venue: 'Uptown Theater, Kansas City, MO' },
        { lat: 41.8781, lon: -87.6298, date: 'Aug. 6, 2024', venue: 'The Salt Shed, Chicago, IL' },
        { lat: 42.3314, lon: -83.0458, date: 'Aug. 7, 2024', venue: 'Detroit, MI' },
        { lat: 39.9612, lon: -82.9988, date: 'Aug. 8, 2024', venue: 'KEMBA Live!, Columbus, OH' },
        { lat: 41.4993, lon: -81.6944, date: 'Aug. 10, 2024', venue: 'Agora Theater & Ballroom, Cleveland, OH' },
        { lat: 43.6532, lon: -79.3832, date: 'Aug. 12, 2024', venue: 'HISTORY, Toronto, ON' },
        { lat: 43.6532, lon: -79.3832, date: 'Aug. 13, 2024', venue: 'HISTORY, Toronto, ON' },
        { lat: 45.5017, lon: -73.5673, date: 'Aug. 14, 2024', venue: 'MTELUS, Montreal, QC' },
        { lat: 42.3601, lon: -71.0589, date: 'Aug. 16, 2024', venue: 'Roadrunner, Boston, MA' },
        { lat: 42.3601, lon: -71.0589, date: 'Aug. 17, 2024', venue: 'Roadrunner, Boston, MA' },
        { lat: 38.9072, lon: -77.0369, date: 'Aug. 18, 2024', venue: 'The Anthem, Washington, DC' },
        { lat: 40.7128, lon: -74.0060, date: 'Aug. 20, 2024', venue: 'Terminal 5, New York, NY' },
        { lat: 40.7128, lon: -74.0060, date: 'Aug. 21, 2024', venue: 'Terminal 5, New York, NY' },
        { lat: 40.7128, lon: -74.0060, date: 'Aug. 22, 2024', venue: 'Terminal 5, New York, NY' },
        { lat: 39.9526, lon: -75.1652, date: 'Aug. 24, 2024', venue: 'The Fillmore Philadelphia, Philadelphia, PA' },
        { lat: 33.7490, lon: -84.3880, date: 'Aug. 26, 2024', venue: 'Coca-Cola Roxy, Atlanta, GA' },
        { lat: 33.7490, lon: -84.3880, date: 'Aug. 27, 2024', venue: 'Coca-Cola Roxy, Atlanta, GA' },
        { lat: 35.2271, lon: -80.8431, date: 'Aug. 29, 2024', venue: 'The Fillmore Charlotte, Charlotte, NC' },
        { lat: 35.7796, lon: -78.6382, date: 'Aug. 30, 2024', venue: 'Raleigh, NC' },
        { lat: 53.4748, lon: -2.2924, date: 'Sep. 14, 2024', venue: 'O2 Victoria Warehouse Manchester, Stretford, UK' },
        { lat: 53.4748, lon: -2.2924, date: 'Sep. 15, 2024', venue: 'O2 Victoria Warehouse Manchester, Stretford, UK' },
        { lat: 52.4862, lon: -1.8904, date: 'Sep. 16, 2024', venue: 'O2 Academy Birmingham, Birmingham, UK' },
        { lat: 51.5555, lon: -0.2795, date: 'Sep. 17, 2024', venue: 'OVO Arena Wembley, London, UK' },
        { lat: 52.5200, lon: 13.4050, date: 'Sep. 20, 2024', venue: 'Columbiahalle, Berlin, Germany' },
        { lat: 48.8566, lon: 2.3522, date: 'Sep. 22, 2024', venue: 'Élysée Montmartre, Paris, France' },
        { lat: 48.8566, lon: 2.3522, date: 'Sep. 23, 2024', venue: 'Bataclan, Paris, France' },
        { lat: 50.0906, lon: 8.7668, date: 'Sep. 24, 2024', venue: 'Stadthalle Offenbach, Offenbach Am Main, Germany' },
        { lat: 51.5606, lon: 5.0916, date: 'Sep. 25, 2024', venue: 'Poppodium 013, Tilburg, Netherlands' },
        { lat: 50.8503, lon: 4.3517, date: 'Sep. 27, 2024', venue: 'La Madeleine, Brussels, Belgium' },
        { lat: 45.4642, lon: 9.1900, date: 'Sep. 29, 2024', venue: 'Fabrique, Milan, Italy' },
        { lat: 47.3769, lon: 8.5417, date: 'Sep. 30, 2024', venue: 'Komplex457, Zürich, Switzerland' },
        { lat: 48.1351, lon: 11.5820, date: 'Oct. 1, 2024', venue: 'Theaterfabrik, München, Germany' },
        { lat: 50.9375, lon: 6.9603, date: 'Oct. 3, 2024', venue: 'Palladium Köln, Köln, Germany' },
        { lat: 50.0755, lon: 14.4378, date: 'Oct. 5, 2024', venue: 'Garbe, Prague, Czechia' },
    ];

    const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    tourLocations.forEach(location => {
        L.marker([location.lat, location.lon]).addTo(map)
            .bindPopup(`<b>${location.date}</b><br>${location.venue}`);
    });

    const tourBus = document.getElementById('tour-bus');

    function animateTourBus() {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tourLocations.forEach((location, index) => {
            tl.to(tourBus, {
                duration: 2,
                x: map.latLngToLayerPoint([location.lat, location.lon]).x,
                y: map.latLngToLayerPoint([location.lat, location.lon]).y,
                ease: "power1.inOut"
            });
        });
    }

    animateTourBus();
});
