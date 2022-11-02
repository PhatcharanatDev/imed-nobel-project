import React, { useState } from "react";
import axios from "axios";
import { Layout, Button } from "antd";
import { AiFillFilter } from "react-icons/ai";
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import ContentComponent from "./components/Content/ContentComponent";

function App() {
  const [year, setYear] = useState(0);
  const [showYear, setShowYear] = useState(false);
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [prizeAmount, setPrizeAmount] = useState(0);

  const findByYear = async () => {
    await setTimeout(() => {
       axios
        .get(
          `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}`
        )
        .then((response) => {
          setShowYear(true);
          setNobelPrizes(response.data.nobelPrizes);
          summaryPrizeAmount(response.data.nobelPrizes);
        })
        .catch((error) => {});
    }, 500);
  };

  const summaryPrizeAmount = (nobelPrizes) => {
    const result = nobelPrizes.reduce((sum, nobelPrize) => {
      return sum + nobelPrize.prizeAmount;
    }, 0);

    setPrizeAmount(result);
  };

  return (
    <div className="App h-screen bg-slate-100 ">
      <Layout>
        <section className="bg-[#024469]">
          <HeaderComponent year={year} showYear={showYear}/>
        </section>

        {/* Filter mobile */}
        <section className="container mx-auto bg-slate-100 px-5 block md:hidden">
          <div className="bg-slate-100  text-end pt-3 px-5">
            <Button
              className="bg-[#024469] text-white md:hidden "
              type="primary"
              size="middle"
            >
              <div className="text-center ">
                <AiFillFilter className="text-xl inline" />
                <span> Filter</span>
              </div>
            </Button>
          </div>
        </section>

        <section className=" bg-slate-100">
          <Layout className="container mx-auto py-3 md:py-8 bg-slate-100 px-5 lg:px-12">
            <SidebarComponent prizeAmount={prizeAmount} onFindByYear={findByYear} onSetYear={setYear} onSetPrizeAmount={setPrizeAmount} onSetShowYear={setShowYear}/>
            <ContentComponent />
          </Layout>
        </section>
      </Layout>
    </div>
  ); 
}

export default App;
