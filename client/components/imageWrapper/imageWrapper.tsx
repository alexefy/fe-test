import React from 'react'
import clsx from 'clsx'

export interface ImageWrapperProps {
  src: string
  altText: string
  hasRoundedCorners?: boolean
  objectFit: 'contain' | 'cover'
}

const ImageWrapper = ({
  src,
  altText,
  hasRoundedCorners,
  objectFit
}: ImageWrapperProps) => {
  const imgWrapperClasses = (hasRoundedCorners: ImageWrapperProps['hasRoundedCorners']) =>
    clsx('bg-lightGrey w-full pb-[100%] relative overflow-hidden', {
      'rounded-[30px]': hasRoundedCorners
    })

  const imgClasses = (objectFit: ImageWrapperProps['objectFit']) =>
    clsx('absolute w-[95%] h-[95%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', {
      'object-contain': objectFit === 'contain',
      'object-cover': objectFit === 'cover'
    })
  return (
    <div className={imgWrapperClasses(hasRoundedCorners)}>
      <img
        className={imgClasses(objectFit)}
        src={src}
        alt={altText}
      />
    </div>
  )
}

export default ImageWrapper
