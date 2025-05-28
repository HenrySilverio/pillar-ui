import Button from '@/components/Button/Button';
import Switch from '@/components/Switch/Switch';

export default function Home() {
  return (
    <div className="h-screen mx-auto my-0 w-4/5 flex justify-center">
      <div className="w-2/4 flex flex-col gap-1 justify-start">
        <Switch />
      </div>
    </div>
  );
}
