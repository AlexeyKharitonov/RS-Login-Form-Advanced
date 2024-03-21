export interface RangeProps {
  id: string;
  label: string;
  type: string;
  name: string;
  min: string;
  max: string;
  value: number;
  step: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
