"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'

export function BeforeAfter({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  return (
    <div
      ref={containerRef}
      className="relative h-64 w-full overflow-hidden rounded-xl border"
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        const p = ((e.clientX - rect.left) / rect.width) * 100
        setPos(Math.min(100, Math.max(0, p)))
      }}
    >
      <Image src={after} alt="after" fill className="object-cover" unoptimized />
      <div className="absolute inset-0" style={{ width: `${pos}%` }}>
        <Image src={before} alt="before" fill className="object-cover" unoptimized />
      </div>
      <div
        className="absolute inset-y-0" 
        style={{ left: `${pos}%` }}
      >
        <div className="h-full w-0.5 bg-white/70 shadow" />
      </div>
    </div>
  )
}


