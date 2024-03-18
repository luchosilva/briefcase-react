import { Switch } from '@headlessui/react';

interface ToggleProps {
  enabled: boolean;
  setEnabled: any;
}
export const Toggle = ({ enabled, setEnabled }: ToggleProps) => {
  return (
    <Switch checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-blue-color' : 'bg-red-color'} relative inline-flex h-6 w-11 items-center rounded-full`}>
      <span className="sr-only">Enable notifications</span>
      <span className={`${enabled ? 'translate-x-6 bg-light-blue-color' : 'translate-x-1 bg-light-red-color'} inline-block h-4 w-4 transform rounded-full `} />
    </Switch>
  );
};
