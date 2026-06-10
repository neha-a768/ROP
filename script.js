mapboxgl.accessToken = 'pk.eyJ1IjoibmVoYTc2OCIsImEiOiJjbXE4Z2R1ejMwMm8xMnhva2lkcnVvbHRkIn0.RuyoOLDbZhUYbxq2CU_QVw';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/neha768/cmq8gjnaz004k01sof38099w7', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });