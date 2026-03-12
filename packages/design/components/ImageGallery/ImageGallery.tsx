import React from 'react'
import { GalleryRow, GalleryItem, GalleryImage } from './ImageGallery.styles'

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <GalleryRow aria-label="A few snapshots from life outside of work">
      {images.map(src => (
        <GalleryItem key={src}>
          <GalleryImage src={src} alt="" aria-hidden="true" />
        </GalleryItem>
      ))}
    </GalleryRow>
  )
}

export default ImageGallery
