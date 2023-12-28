import { useState } from "react";
import logo from "./assets/logos/logo.webp";
// #51BA78
function App() {
  const dummyData = ["1", "2", "3", "4"];
  const [serach, setSearch] = useState<string>();
  const [displayData, setDispalyData] = useState<string[]>([]);
  const handleClick = () => {
    let newData = dummyData.filter((val: string) => {
      if (!serach) {
        return val;
      } else if (val.toLowerCase().includes(serach.toLowerCase())) {
        return val;
      }
    });
    setDispalyData(newData);
  };

  return (
    <div className="flex flex-col items-center  justify-center py-10 w-[100vw] h-[100%]">
      <div className="flex items-center justify-center flex-col gap-5">
        <img src={logo} />
        <h1 className="text-[#51BA78] text-center ">
          გადაამოწმეთ პირადი მონაცემები და მისამართი ამომრჩეველთა ერთიან სიაში
        </h1>
        <p className="text-red-700 text-[11px] text-center">
          ვებგვერდი განკუთვნილია მხოლოდ ამომრჩეველთათვის — საკუთარი და ოჯახის
          წევრების მონაცემების გადასამოწმებლად!
        </p>
      </div>
      {/* second line */}
      <div className="w-[100%] h-[1px] bg-gray-200 mt-[4rem] "></div>
      {/* inputs */}
      <p className="text-[11px] mt-20">(01.11.2023 მდგომარეობით)</p>
      <div className="w-[100%] items-center justify-center flex py-20 ">
        <div className="w-[100%] items-center justify-around gap-10 flex flex-col">
          <input
            type="text"
            onChange={(e) => setSearch(String(e.target.value))}
            placeholder="პირადი ნომერი"
            className="w-[50%] h-[3rem] max_sm8:w-[90%] outline outline-2 outline-[#51BA78] rounded-[1px] px-3"
          />
          <input
            type="text"
            placeholder="გვარი"
            className="w-[50%] h-[3rem] max_sm8:w-[90%] outline outline-2 outline-[#51BA78] rounded-[1px]  px-3"
          />
          <button
            onClick={handleClick}
            className="w-[50%] h-[3rem] max_sm8:w-[90%]  text-white  font-bold bg-[#51BA78] rounded-[1px] hover:bg-gray-800"
          >
            ძებნა
          </button>
        </div>
      </div>
      <div>
        {displayData.map((val: any, i: number) => (
          <div key={i}>{val}</div>
        ))}
        <h1>© საქართველოს საარჩევნო ადმინისტრაცია</h1>
      </div>
    </div>
  );
}

export default App;
