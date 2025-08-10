"use client"
import { useState, useEffect } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl'

export function StudioMap() {
  const [mapToken, setMapToken] = useState<string | null>(null)
  const [mapError, setMapError] = useState<string | null>(null)

  useEffect(() => {
    // Get token on client side to avoid SSR issues
    setMapToken(process.env.NEXT_PUBLIC_MAPBOX_TOKEN || null)
  }, [])

  if (!mapToken) {
    return (
      <div className="h-[320px] w-full rounded-lg border bg-gray-100 flex items-center justify-center">
        <div className="text-center text-sm text-gray-600">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <p>Map token not configured</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[320px] w-full rounded-lg border overflow-hidden">
      {mapError && (
        <div className="bg-red-100 text-red-700 p-2 text-sm">
          Error: {mapError}
        </div>
      )}
      <Map
        mapboxAccessToken={mapToken}
        initialViewState={{
          longitude: -79.3832,
          latitude: 43.6532,
          zoom: 13
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onError={(e) => {
          console.error('Map error:', e)
          setMapError(e.error?.message || 'Failed to load map')
        }}
      >
        <NavigationControl position="top-right" />
        <Marker 
          longitude={-79.3832} 
          latitude={43.6532}
          color="#3B82F6"
        />
      </Map>
    </div>
  )
}


