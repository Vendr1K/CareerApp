import { IconProps } from '@props'

export const ClearIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width='8'
      height='8'
      className={className ?? ''}
      viewBox='0 0 8 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.28145 1.28145C7.57441 0.988477 7.57441 0.512695 7.28145 0.219727C6.98848 -0.0732422 6.5127 -0.0732422 6.21973 0.219727L3.75176 2.69004L1.28145 0.22207C0.988477 -0.0708985 0.512695 -0.0708985 0.219727 0.22207C-0.0732422 0.515039 -0.0732422 0.99082 0.219727 1.28379L2.69004 3.75176L0.22207 6.22207C-0.0708984 6.51504 -0.0708984 6.99082 0.22207 7.28379C0.515039 7.57676 0.99082 7.57676 1.28379 7.28379L3.75176 4.81348L6.22207 7.28145C6.51504 7.57441 6.99082 7.57441 7.28379 7.28145C7.57676 6.98848 7.57676 6.5127 7.28379 6.21973L4.81348 3.75176L7.28145 1.28145Z'
        fill='#747474'
      />
    </svg>
  )
}
