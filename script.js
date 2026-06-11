mapboxgl.accessToken = 'pk.eyJ1IjoibmVoYTc2OCIsImEiOiJjbXE4Z2R1ejMwMm8xMnhva2lkcnVvbHRkIn0.RuyoOLDbZhUYbxq2CU_QVw';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: "mapbox://styles/neha768/cmq8gjnaz004k01sof38099w7", // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });

    map.on('load', function() {
      map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/cwilmott/n183/refs/heads/main/data/data.geojson'
    });
    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });
     map.on('click', 'points-layer', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;
    const popupContent = `
    <div>
        <h3>${properties.feature_name}</h3>
        <p><i>${properties.feature_class}</i></p>
        ${properties.image ? 
           `<img src="${properties.image}" alt="${properties.image_caption}" style="width:100%; border-radius:5px; margin-bottom:10px;">`
           : ''
        }
        <p>Image Caption: ${properties.image_caption}</p>
        <p>${properties.county_name}</p>
    </div>
`;
new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);



    });

});
