import { IconProps } from '@props'

export const ArrowIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={className ?? ''}
      {...props}
      width='7'
      height='12'
      viewBox='0 0 7 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.52974 6.52988C6.8227 6.23691 6.8227 5.76113 6.52974 5.46816L2.02974 0.968163C1.73677 0.675195 1.26099 0.675195 0.968017 0.968163C0.675048 1.26113 0.675048 1.73691 0.968017 2.02988L4.93833 6.0002L0.970361 9.97051C0.677392 10.2635 0.677392 10.7393 0.970361 11.0322C1.26333 11.3252 1.73911 11.3252 2.03208 11.0322L6.53208 6.53223L6.52974 6.52988Z'
        fill='#747474'
      />
    </svg>
  )
}
