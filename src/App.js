import React, { useState } from "react";
import axios from "axios";
import { Layout, Button } from "antd";
import { AiFillFilter } from "react-icons/ai";
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import ContentComponent from "./components/Content/ContentComponent";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [applyLoading, setApplyLoadings] = useState(false);
  const [year, setYear] = useState(0);
  const [showYear, setShowYear] = useState(false);
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [prizeAmount, setPrizeAmount] = useState(0);

  const findByYear = async () => {
    setApplyLoadings(true)
    await setTimeout(() => {
      axios
        .get(
          `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`
        )
        .then((response) => {
          setShowYear(true);
          setNobelPrizes(response.data.nobelPrizes);
          summaryPrizeAmount(response.data.nobelPrizes);
          setSidebarOpen(false)
          setApplyLoadings(false)
        })
        .catch((error) => {
          setApplyLoadings(false)
        });
    }, 1000);
  };

  const summaryPrizeAmount = (nobelPrizes) => {
    const result = nobelPrizes.reduce((sum, nobelPrize) => {
      return sum + nobelPrize.prizeAmount;
    }, 0);

    setPrizeAmount(result);
  };

  return (
    <Layout className="h-auto">
      
      <HeaderComponent year={year} showYear={showYear} />

      {/* Filter mobile */}
      <div className="bg-slate-100 text-end pt-3 px-5 lg:px-12">
        <Button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-[#024469] text-white md:hidden "
          type="primary"
          size="middle"
        >
          <div className="text-center ">
            <AiFillFilter className="text-xl inline" />
            <span>Filter</span>
          </div>
        </Button>
      </div>

      <Layout className="bg-slate-100 py-3 px-5 lg:px-12">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <SidebarComponent
          sidebarOpen={sidebarOpen}
          applyLoading={applyLoading}
          prizeAmount={prizeAmount}
          onFindByYear={findByYear}
          onSetYear={setYear}
          onSetNobelPrizes={setNobelPrizes}
          onSetPrizeAmount={setPrizeAmount}
          onSetShowYear={setShowYear}
        />
        <ContentComponent nobelPrizes={nobelPrizes} />
      </Layout>
      {/* </section> */}
    </Layout>
  );
}

export default App;
