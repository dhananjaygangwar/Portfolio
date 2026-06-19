'use client'

import { useEffect, useState } from 'react'

export function LocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      }).format(new Date())

    const update = () => setTime(format())
    const initial = setTimeout(update, 0)
    const id = setInterval(update, 30_000)
    return () => {
      clearTimeout(initial)
      clearInterval(id)
    }
  }, [])

  return (
    <span suppressHydrationWarning>{time ? `${time} IST` : '— IST'}</span>
  )
}
