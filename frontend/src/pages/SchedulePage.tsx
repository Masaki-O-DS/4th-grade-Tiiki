import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import EventInfoCard from "../cards/EventInfoCard";

const SchedulePage = () => {
  return (
    <div className="px-4 pb-10 h-auto w-full">
      <div className="h-3/4 w-full text-xs mt-5">
        <FullCalendar
          plugins={[timeGridPlugin]}
          height={430}
          locales={[jaLocale]}
          locale="ja"
          dayHeaderContent={(args) => {
            const date = args.date;
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const weekday = ["日", "月", "火", "水", "木", "金", "土"][
              date.getDay()
            ];
            return (
              <div>
                {month}/{day}
                <br />({weekday})
              </div>
            );
          }}
        />
      </div>
      <div className="p-2 ">
        <EventInfoCard />
      </div>
    </div>
  );
};

export default SchedulePage;
