export interface FilterCheckboxProps {
  value: string
  checkboxData: string[]
  toggleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void
  setCheckboxData: (value: React.SetStateAction<string[]>) => void
}
