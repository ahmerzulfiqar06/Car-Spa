"use client"
import Map, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export function StudioMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-lg border shadow-lg bg-gray-200">
      {token ? (
        <Map
          mapboxAccessToken={token}
          initialViewState={{ 
            longitude: -79.3832, 
            latitude: 43.6532, 
            zoom: 15,
            pitch: 0,
            bearing: 0
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          reuseMaps
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: '0.5rem'
          }}
          attributionControl={false}
        >
          <NavigationControl 
            position="top-right" 
            showCompass={false}
          />
          <Marker 
            longitude={-79.3832} 
            latitude={43.6532}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </Marker>
        </Map>
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>Configure NEXT_PUBLIC_MAPBOX_TOKEN to display the map</p>
          </div>
        </div>
      )}
    </div>
  )
}


