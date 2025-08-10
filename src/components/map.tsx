"use client"
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import('react-map-gl').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full rounded-lg border bg-gray-100 flex items-center justify-center">
      <div className="text-center text-sm text-gray-600">
        <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
        <p>Loading map...</p>
      </div>
    </div>
  )
})

const Marker = dynamic(() => import('react-map-gl').then(mod => mod.Marker), { ssr: false })
const NavigationControl = dynamic(() => import('react-map-gl').then(mod => mod.NavigationControl), { ssr: false })

export function StudioMap() {
  const [mounted, setMounted] = useState(false)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    setMounted(true)
    
    // Load Mapbox CSS dynamically
    if (typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css'
      document.head.appendChild(link)
    }
  }, [])

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  if (!mounted || !token) {
    return (
      <div className="h-[320px] w-full rounded-lg border bg-gray-100 flex items-center justify-center">
        <div className="text-center text-sm text-gray-600">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <p>{!token ? 'Map token not configured' : 'Loading map...'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[320px] w-full rounded-lg border overflow-hidden bg-white">
      <Map
        ref={mapRef}
        mapboxAccessToken={token}
        initialViewState={{
          longitude: -79.3832,
          latitude: 43.6532,
          zoom: 14,
          pitch: 0,
          bearing: 0
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative'
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        attributionControl={false}
        onLoad={() => {
          console.log('Map loaded successfully')
        }}
        onError={(e) => {
          console.error('Map error:', e)
        }}
      >
        <NavigationControl position="top-right" showCompass={false} />
        <Marker 
          longitude={-79.3832} 
          latitude={43.6532}
          anchor="bottom"
        >
          <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
        </Marker>
      </Map>
    </div>
  )
}


