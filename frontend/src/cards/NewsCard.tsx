const NewsCard = () => {
  return (
    <div className="w-full h-auto bg-white rounded-md p-2 px-6 border-2 border-solid border-slate-200">
      <p className="font-semibold pt-2">回覧板</p>
      <p className="text-slate-500 text-sm my-1">新着3件</p>
      <ul className="my-2 ">
        <li className="pl-4 text-sm mb-1 flex justify-between">
          防災訓練のお知らせ
          <p className="bg-red-200 text-red-700 w-10 text-center rounded-sm">
            既読
          </p>
        </li>
        <li className="pl-4 text-sm mb-1 flex justify-between">
          ゴミ収集日変更のお知らせ
          <p className="bg-green-200 text-green-700 w-10 text-center rounded-sm">
            未読
          </p>
        </li>
        <li className="pl-4 text-sm mb-1 flex justify-between">
          町内会費納入のお願い
          <p className="bg-green-200 text-green-700 w-10 text-center rounded-sm">
            未読
          </p>
        </li>
      </ul>
      <button className=" border border-solid p-1 px-2 rounded-md ">
        全てを見る
      </button>
    </div>
  );
};

export default NewsCard;
