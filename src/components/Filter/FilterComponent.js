import { Button, Select } from "antd";
const { Option } = Select;

const FilterComponent = (props) => {
  const {
    applyLoading,
    filterYears,
    prizeAmount,
    onFindByYear,
    onSelectChange,
    onSelectClear
  } = props;

  const filterYearItems = filterYears.map((filterYear, index) => {
    return (
      <Option key={index} value={filterYear}>
        {filterYear}
      </Option>
    );
  });

  return (
    <div className="content-center grid gap-4 p-5">
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

      {/* <Button onClick={onFindByYear} className="mx-2 bg-[#024469] text-white ">
        Apply Filter
      </Button> */}
      <hr className="mx-0" />
      <div className="flex justify-between mx-2">
        <h2 className="mb-1 text-slate-500 font-normal">Prize Amount</h2>
        <p>{Number(prizeAmount).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FilterComponent;
