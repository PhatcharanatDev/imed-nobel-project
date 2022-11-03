import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
const { Option } = Select;

const FilterComponent = (props) => {
  const {
    applyLoading,
    prizeAmount,
    onFindByYear,
    onSetYear,
    onSetPrizeAmount,
    onSetShowYear,
    onSetNobelPrizes,
  } = props;

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
    if (value != null) {
      onSetYear(value);
    }
  };

  const onSelectClear = () => {
    onSetPrizeAmount(0);
    onSetNobelPrizes([]);
    onSetShowYear(false);
    onSetYear(0);
  };

  const filterYearItems = filterYears.map((filterYear, index) => {
    return (
      <Option key={index} value={filterYear}>
        {filterYear}
      </Option>
    );
  });

  return (
    <div className="content-center grid gap-4 p-0 md:p-5">
      <div className="mx-2">
        <h3 className="mb-1 text-slate-500 font-normal">Select a year</h3>
        <Select
          showSearch
          allowClear={true}
          placeholder="Search to Select"
          className="w-full"
          onChange={onSelectChange}
          onClear={onSelectClear}
        >
          {filterYearItems}
        </Select>
      </div>
      <Button
        type="primary"
        loading={applyLoading}
        onClick={onFindByYear}
        className="mx-2 bg-[#024469] text-white "
      >
        Apply Filter
      </Button>

      <hr className="mx-0" />
      <div className="flex justify-between mx-2">
        <h2 className="text-slate-500 text-sm font-normal mb-1 ">Prize Amount Total</h2>
        <p className="text-sm">{Number(prizeAmount).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FilterComponent;
