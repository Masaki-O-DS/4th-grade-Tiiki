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
          /* ← ここでヘッダー用のボタン配置 */
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          /* ← ここでタイトル書式を上書き */
          /* グローバルに全ビュー共通にする場合はトップレベルに */
          titleFormat={{
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }}
          /* もし week ビューだけ変えたいなら views の中で */
          views={{
            timeGridWeek: {
              titleFormat: {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              },
            },
          }}
          /* カスタム日ヘッダーもそのまま使えます */
          dayHeaderContent={(args) => {
            const date = args.date;
            const M = date.getMonth() + 1;
            const d = date.getDate();
            const w = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
            return (
              <div>
                {M}/{d}
                <br />({w})
              </div>
            );
          }}
          initialView="timeGridWeek"
        />
      </div>
      <div className="p-2 ">
        <EventInfoCard />
      </div>
    </div>
  );
};

export default SchedulePage;
