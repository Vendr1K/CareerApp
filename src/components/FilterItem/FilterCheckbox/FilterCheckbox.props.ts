export interface FilterCheckboxProps {
  id: string
  value: string
  checkboxData: string[]
  toggleCheckbox: () => void
  setCheckboxData: (value: React.SetStateAction<string[]>) => void
}
