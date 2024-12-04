import { CheckBoxProps } from '@props'

export const CheckBox = ({
  cheked,
  value,
  className,
  ...props
}: CheckBoxProps) => {
  return (
    <input
      type='checkbox'
      className={className}
      value={value}
      checked={cheked}
      {...props}
    />
  )
}
