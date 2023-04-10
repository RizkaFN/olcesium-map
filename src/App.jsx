import { useEffect, useRef, useState } from 'react'
import './App.css'
import OLCesium from 'olcs/OLCesium.js';

function App() {
  const map = useRef(null);

  useEffect(()=> {
    const ol3d = new OLCesium({map: ol2dMap}, map.current); // ol2dMap is the ol.Map instance
    ol3d.setEnabled(true);
  })

  return (
    <div id="map" ref={map} />
  )
}

export default App
