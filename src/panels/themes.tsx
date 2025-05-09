import Countdown, { CountdownRenderProps } from 'react-countdown';

const TARGET = new Date('2025-04-24T03:30:00Z');

export default function ThemesPanel() {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: CountdownRenderProps) => {

    const Slot = ({
      value,
      label,
    }: {
      value: number | string;
      label: string;
    }) => (
      <div className="flex flex-col items-center">
        <span className="font-abduction text-white text-4xl">
          {String(value).padStart(2, '0')}
        </span>
        <span className="mt-1 font-code text-base sm:text-lg uppercase text-white">
          {label}
        </span>
      </div>
    );

    return (
      <div className="flex justify-center gap-6 sm:gap-10">
        <Slot value={days} label="Days" />
        <Slot value={hours} label="Hours" />
        <Slot value={minutes} label="Minutes" />
        <Slot value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-offblack py-12 px-4">
        <div className="text-center space-y-2">
            <h3 className="font-code text-white italic">CODEBREW THEME 2025:</h3>
            <h1 className="font-abduction text-3xl sm:text-4xl text-green">
                "REVISITING THE PAST"
            </h1>
        </div>
        <div className="space-y-2">
            <h3 className="font-code text-white italic text-center">TRACKS 2025:</h3>
            <Countdown date={TARGET} renderer={renderer} />
      </div>
    </div>
  );
}