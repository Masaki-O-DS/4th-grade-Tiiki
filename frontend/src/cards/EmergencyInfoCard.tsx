const EmergencyInfoCard = () => {
  return (
    <div className="w-full h-auto   bg-white rounded-md p-2 border border-solid border-red-500 border-x-4">
      <p className="font-semibold text-red-500 pt-2">・緊急情報</p>
      <p className="pl-6 text-sm pt-2">台風に伴う避難情報を確認してください</p>
      <button className="bg-red-500  p-2 rounded-md text-white ml-6 my-2">
        災害モードを開く
      </button>
    </div>
  );
};

export default EmergencyInfoCard;
