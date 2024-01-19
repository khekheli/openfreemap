function initMap() {
  if (window.map) return

  const map = new maplibregl.Map({
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [-0.114, 51.506],
    zoom: 14.2,
    bearing: 55.2,
    pitch: 60,
    container: mapDiv,
    boxZoom: false,
    doubleClickZoom: false,
    scrollZoom: false,
    attributionControl: false,
  })
  window.map = map

  map.once('idle', () => {
    document.getElementById('mapbg-image').remove()
  })

  let nav = new maplibregl.NavigationControl({ showCompass: false })
  map.addControl(nav, 'top-right')

  let scale = new maplibregl.ScaleControl()
  map.addControl(scale)

  let attrib = new maplibregl.AttributionControl({
    compact: false,
  })
  map.addControl(attrib)

  new maplibregl.Marker().setLngLat([-0.119, 51.507]).addTo(map)
}

const mapDiv = document.getElementById('map-container')
// mapDiv.onclick = function () {
//   initMap()
// }

initMap()

function selectStyle(style) {
  // initMap()

  const styleUrl = 'https://tiles.openfreemap.org/styles/' + style
  map.setStyle(styleUrl)
  map.setPitch(0)
  map.setBearing(0)

  const spans = document.querySelectorAll('#style-url-code span')
  spans[2].innerText = '/' + style
}
