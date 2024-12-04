import { IconProps } from '@props'
import {
  ArrowIcon,
  BagIcon,
  LocationIcon,
  OptionallyIcon,
  StarIcon,
  HideIcon,
  ClearIcon,
  TagTechnIcon,
  DatePublishedIcon,
  TimeIcon,
  ExpIcon,
  EducationIcon,
  PartTimeIcon,
  FinanceIcon,
  OtherParamsIcon,
  CheckboxActiveIcon,
  CheckboxIcon,
  RadioActiveIcon,
  RadioIcon
} from '@components/UI/Icons'

export const Icon = ({ className, name, ...props }: IconProps) => {
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
    case 'clear':
      return <ClearIcon className={className} {...props} />
    case 'tagtech':
      return <TagTechnIcon className={className} {...props} />
    case 'datepublished':
      return <DatePublishedIcon className={className} {...props} />
    case 'time':
      return <TimeIcon className={className} {...props} />
    case 'exp':
      return <ExpIcon className={className} {...props} />
    case 'education':
      return <EducationIcon className={className} {...props} />
    case 'parttime':
      return <PartTimeIcon className={className} {...props} />
    case 'finance':
      return <FinanceIcon className={className} {...props} />
    case 'other':
      return <OtherParamsIcon className={className} {...props} />
    case 'checkboxActive':
      return <CheckboxActiveIcon className={className} {...props} />
    case 'checkbox':
      return <CheckboxIcon className={className} {...props} />
    case 'radioActive':
      return <RadioActiveIcon className={className} {...props} />
    case 'radio':
      return <RadioIcon className={className} {...props} />
    default:
      ;<></>
  }
}
