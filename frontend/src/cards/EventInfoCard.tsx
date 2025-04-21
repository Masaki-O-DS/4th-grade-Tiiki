const EventInfoCard = () => {
  return (
    <div className="w-full h-auto  bg-white rounded-md p-2 px-6 border-2 border-solid border-slate-200 py-4">
      <div>
        <p className="font-semibold">町内会イベント</p>
        <p className=" text-sm pt-2">イベント名 : 4丁目公園清掃</p>
        <p className=" text-sm pt-1 pb-3">開始予定日時 : 2025/8/20 19:00~</p>
      </div>

      <button className="  p-1 rounded-md border border-solid  ">
        詳細を見る
      </button>
      <button className=" p-1 rounded-md border ml-2 border-solid">
        参加する
      </button>
    </div>
  );
};

export default EventInfoCard;
