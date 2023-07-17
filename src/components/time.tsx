import { useEffect, useState } from "react";

export default function Time() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div className="text-sm tracking-widest text-neutral-300">
      <time dateTime={date.toISOString()}>
        {date.toLocaleTimeString("en-US", {
          timeZone: "Europe/Paris",
        })}
      </time>
      <span> CEST</span>
    </div>
  );
}
