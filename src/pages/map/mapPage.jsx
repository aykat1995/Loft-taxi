import React from 'react'
import mapboxgl from "mapbox-gl"

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWlrYXRjaGFsYmFhIiwiYSI6ImNsYXdoejNtbDAxcHEzcW8wOGsyaTFhbmUifQ.kqCuacaVUwpQz-M9pu1scA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className='map__wrapper'>
        <div data-testid='map' className="map" ref={this.mapContainer}></div>
      </div>
    )
  }
}

export default function MapPage () {
  return (
    <Map/>
  )
}