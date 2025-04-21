import EmergencyInfoCard from "../cards/EmergencyInfoCard.tsx";
import EventInfoCard from "../cards/EventInfoCard.tsx";
import NewsCard from "../cards/NewsCard.tsx";
import Bell from "../icon/bell";

const DashBoardPage = () => {
  return (
    <div className="h-auto w-auto bg-slate-100">
      {/* ヘッダー */}
      <div className="bg-white h-12 w-screen border-solid border-b-1 border-gray-300 flex flex-row items-center justify-between fixed">
        <div className="text-green-600 text-xl font-bold my-1 ml-2">
          タウンリンク
        </div>
        <div className="mr-4">
          <Bell />
        </div>
      </div>

      {/* ダッシュボード */}
      <div className="pt-12 p-2 overflow-scroll pb-18">
        <p className="m-2 font-semibold">ダッシュボード</p>
        <div className=" mx-3 flex flex-col justify-center items-center gap-y-2">
          <EmergencyInfoCard />
          <EventInfoCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
