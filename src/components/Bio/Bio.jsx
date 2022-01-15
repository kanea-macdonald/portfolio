import avatar from "./avatar.png";
export const Bio = () => {
  return (
    <div className="flex">
      <img src={avatar} alt="it's a me" className=" w-40 h-40 rounded-full" />
      <div>
        <h3 className="text-teal-900 text-3xl">Kanea MacDonald</h3>
        <h4 className="text-teal-800 text-2xl">Good at Coding (One Day)</h4>
      </div>
    </div>
  );
};
