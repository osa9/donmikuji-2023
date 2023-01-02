import React from 'react'

import { getMediaUrl } from '../lib/utils'

const cache = new Map<string, Blob>()

const resourceUrls = [
  '/3starwish-single.mp4',
  '/4starwish.mp4',
  '/5starwish.mp4',
  '/gacha-pu.png',
  '/wish-button.png',
  '/4starwish-single.mp4',
  '/5starwish-single.mp4',
  '/background.png',
  '/characters/bad.png',
  '/characters/bad_small.png',
  '/characters/banimiko.png',
  '/characters/banimiko_small.png',
  '/characters/dirudo.png',
  '/characters/dirudo_small.png',
  '/characters/bottom.png',
  '/characters/bottom_small.png',
  '/characters/large.png',
  '/characters/large_small.png',
  '/characters/middle.png',
  '/characters/middle_small.png',
  '/characters/normal.png',
  '/characters/normal_small.png',
  '/characters/small.png',
  '/characters/small_small.png',
]

export const isMedia = (url: string) =>
  url.endsWith('.mp4') ||
  url.endsWith('.png') ||
  url.endsWith('.jpg') ||
  url.endsWith('.jpeg')
export const mimeType = (url: string) => {
  if (url.endsWith('.png')) return 'image/png'
  if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg'
  if (url.endsWith('.mp4')) return 'video/mp4'
}

let loaded = false

export const useCache = () => {
  React.useEffect(() => {
    if (loaded) return
    loaded = true
    resourceUrls.forEach((url) => {
      const fullUrl = getMediaUrl(url)
      if (isMedia(url)) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', fullUrl, true)
        xhr.responseType = 'blob'
        xhr.onload = () => {
          if (xhr.status === 200) {
            cache.set(
              url,
              new Blob([xhr.response], { type: mimeType(fullUrl) })
            )
          }
        }
        xhr.send()
      }
    })
  }, [])

  return cache
}
