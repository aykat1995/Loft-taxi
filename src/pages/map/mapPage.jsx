import React, { useEffect, createRef, useRef } from 'react'
import mapboxgl from "mapbox-gl"
import { connect } from 'react-redux';
import drawRoute from '../../components/drawRoute/drawRoute.js'
import { changeRouteBoxView } from '../../actions.js';

export function MapPage({route,routeBoxView, changeRouteBoxView}) {
  const map = useRef(null);
  const mapContainer = createRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWlrYXRjaGFsYmFhIiwiYSI6ImNsYXdoejNtbDAxcHEzcW8wOGsyaTFhbmUifQ.kqCuacaVUwpQz-M9pu1scA';
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 12
    })
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (route && route.length > 0) {
      drawRoute(map.current, route);
      changeRouteBoxView('INITIAL')
    }
    if (route === null) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
  }, [route]);

    return (
      <>
        <div className='map__wrapper'>
          <div data-testid='map' className="map" ref={mapContainer}></div>
        </div>
      </>      
    )
}

export default connect(
  (state) => ({route: state.auth.route, routeBoxView: state.auth.routeBoxView}),
  {changeRouteBoxView}
)(MapPage)