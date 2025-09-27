import { useMemo } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import type { FeatureCollection } from 'geojson'
import { geoJSON, LatLngBounds } from 'leaflet'

import berlinDataRaw from '../public/geo/berlin.json'
import brandenburgDataRaw from '../public/geo/brandenburg.json'

const highlightStyles = {
  berlin: {
    fillColor: 'rgba(25, 104, 122, 0.65)',
    color: '#0B5461',
    weight: 3,
  },
  brandenburg: {
    fillColor: 'rgba(240, 198, 140, 0.55)',
    color: 'rgba(204, 150, 75, 0.9)',
    weight: 2.4,
  },
} as const

export function RegionMap() {
  const berlinData = berlinDataRaw as FeatureCollection
  const brandenburgData = brandenburgDataRaw as FeatureCollection
  const bounds = useMemo(() => {
    const berlinBounds = geoJSON(berlinData).getBounds()
    const brandenburgBounds = geoJSON(brandenburgData).getBounds()
    const combined = new LatLngBounds(berlinBounds.getSouthWest(), berlinBounds.getNorthEast())
    combined.extend(brandenburgBounds)
    return combined
  }, [berlinData, brandenburgData])

  return (
    <div className="overflow-hidden rounded-3xl border border-white/20 bg-surface-elevated/85 shadow-soft">
      <MapContainer
        bounds={bounds}
        scrollWheelZoom={false}
        className="h-full min-h-[320px] w-full"
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap-Mitwirkende"
        />
        <GeoJSON key="brandenburg" data={brandenburgData} style={highlightStyles.brandenburg} />
        <GeoJSON key="berlin" data={berlinData} style={highlightStyles.berlin} />
      </MapContainer>
      <div className="border-t border-white/10 px-6 py-4 text-xs text-ink-muted">
        <span className="block">Unser Einsatzgebiet: Berlin als Kern, Brandenburg als direkte Betreuung.</span>
      </div>
    </div>
  )
}

export default RegionMap
