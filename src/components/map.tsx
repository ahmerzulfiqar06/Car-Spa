"use client"
import Map, { Marker, NavigationControl } from 'react-map-gl'

export function StudioMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-lg border">
      {token ? (
        <Map
          mapboxAccessToken={token}
          initialViewState={{ longitude: -79.3832, latitude: 43.6532, zoom: 11 }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          reuseMaps
        >
          <NavigationControl position="top-left" />
          <Marker longitude={-79.3832} latitude={43.6532} />
        </Map>
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Configure NEXT_PUBLIC_MAPBOX_TOKEN to display the map
        </div>
      )}
    </div>
  )
}


