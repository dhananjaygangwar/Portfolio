'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer || reduceMotion) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    let rafId = 0
    const tick = () => {
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`

      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`

      rafId = window.requestAnimationFrame(tick)
    }

    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

