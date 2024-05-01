import React from 'react'
import { ArrowIcon, BagIcon, LocationIcon, OptionallyIcon, StarIcon, HideIcon } from '../UI/Icons'

export const Icon = ({ className, name, ...props }) => {
  switch (name) {
    case 'arrow':
      return <ArrowIcon className={className} {...props} />
    case 'bag':
      return <BagIcon className={className} {...props} />
    case 'location':
      return <LocationIcon className={className} {...props} />
    case 'optional':
      return <OptionallyIcon className={className} {...props} />
    case 'star':
      return <StarIcon className={className} {...props} />
    case 'hide':
      return <HideIcon className={className} {...props} />
    default: <></>
  }

}
