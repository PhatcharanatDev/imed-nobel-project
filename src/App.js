import React, { useState } from "react";
import axios from "axios";
import { Layout, Button, message  } from "antd";
import { AiFillFilter } from "react-icons/ai";
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import ContentComponent from "./components/Content/ContentComponent";
import FilterModal from "./components/Modal/FilterModal";

function App() {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [applyLoading, setApplyLoadings] = useState(false);
  const [year, setYear] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);
  const [showYear, setShowYear] = useState(false);
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [meta, setMeta] = useState([]);
  const [prizeAmount, setPrizeAmount] = useState(0);

  const onChangePage = async (page) => {
    await axios
      .get(
        `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}&limit=${pageSize}&offset=${
          (page - 1) * pageSize
        }`
      )
      .then((response) => {
        setPage(page);
        setNobelPrizes(response.data.nobelPrizes);
        setMeta(response.data.meta);
        summaryPrizeAmount(response.data.nobelPrizes);
      })
      .catch((error) => {});
  };

  const findByYear = async () => {
  
    if (year === 0) {
      message.warning('Please select a year');
      return;
    }

    setApplyLoadings(true);
    await setTimeout(() => {
      axios
        .get(
          `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${year}&limit=${pageSize}`
        )
        .then((response) => {
          setPage(1);
          setShowYear(true);
          setNobelPrizes(response.data.nobelPrizes);
          setMeta(response.data.meta);
          summaryPrizeAmount(response.data.nobelPrizes);
          setFilterModalOpen(false);
          setApplyLoadings(false);
        })
        .catch((error) => {
          setApplyLoadings(false);
        });
    }, 800);
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

      {/* Filter button mobile */}
      <div className="bg-white text-end py-3 px-12 md:hidden">
        <Button
          onClick={() => setFilterModalOpen(!filterModalOpen)}
          className="bg-[#024469] text-white w-full"
          type="primary"
          size="large"
        >
          <div className="text-center ">
            <AiFillFilter className="text-xl inline" />{" "}
            <span className="text-lg">Filter</span>
          </div>
        </Button>
      </div>

      <Layout className="bg-slate-100 py-3 px-5 lg:px-12">

        <FilterModal
          filterModalOpen={filterModalOpen}
          applyLoading={applyLoading}
          prizeAmount={prizeAmount}
          onFindByYear={findByYear}
          onSetYear={setYear}
          onSetNobelPrizes={setNobelPrizes}
          onSetPrizeAmount={setPrizeAmount}
          onSetShowYear={setShowYear}
          onSetFilterModalOpen={setFilterModalOpen}
        />
  
        <SidebarComponent
          filterModalOpen={filterModalOpen}
          applyLoading={applyLoading}
          prizeAmount={prizeAmount}
          onFindByYear={findByYear}
          onSetYear={setYear}
          onSetNobelPrizes={setNobelPrizes}
          onSetPrizeAmount={setPrizeAmount}
          onSetShowYear={setShowYear}
        />
        <ContentComponent
          meta={meta}
          nobelPrizes={nobelPrizes}
          page={page}
          pageSize={pageSize}
          onChangePage={onChangePage}
        />
      </Layout>
    </Layout>
  );
}

export default App;
