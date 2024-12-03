export const CheckboxIcon = ({ className, ...props }) => {
  return (
    <svg
      width='16'
      height='16'
      className={className ?? ''}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='0.75'
        y='0.75'
        width='14.5'
        height='14.5'
        rx='3.25'
        stroke='#C5C5C5'
        strokeWidth='1.5'
      />
    </svg>
  )
}
