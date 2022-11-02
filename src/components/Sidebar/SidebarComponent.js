import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import FilterComponent from "../Filter/FilterComponent";
const { Sider } = Layout;

const SidebarComponent = (props) => {
  const { prizeAmount, onFindByYear, onSetYear, onSetPrizeAmount, onSetShowYear} = props;
  const [filterYears, setFilterYears] = useState([]);

  useEffect(() => {
    retrieveYears();
  }, []);

  const retrieveYears = () => {
    const currentYear = new Date().getFullYear();
    let startYear = 1901;
    const years = [];
    while (startYear <= currentYear) {
      years.unshift(startYear++);
    }
    setFilterYears(years);
  };

  const onSelectChange = (value) => {
    onSetYear(value);
  };

  const onSelectClear = () => {
    onSetPrizeAmount(0);
    onSetShowYear(false);
  };


  return (
    <Sider className="bg-white w-72 min-w-0 max-w-sm flex-none  duration-300 h-full left-0 -translate-x-96  md:translate-x-0 md:static z-40 absolute top-0 drop-shadow-md">
      <FilterComponent filterYears={filterYears} prizeAmount={prizeAmount} onFindByYear={onFindByYear} onSelectChange={onSelectChange} onSelectClear={onSelectClear}  />
    </Sider>
  );
};

export default SidebarComponent;
