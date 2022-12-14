import { Layout } from "antd";
import FilterComponent from "../Filter/FilterComponent";
const { Sider } = Layout;

const SidebarComponent = (props) => {
  const {
    applyLoading,
    prizeAmount,
    onFindByYear,
    onSetYear,
    onSetPrizeAmount,
    onSetShowYear,
    onSetNobelPrizes,
  } = props;

  return (
    <Sider
      className={`bg-white w-72  min-w-0 max-w-sm flex-none  duration-300 left-0 hidden md:block  drop-shadow-md`}
    >
      <FilterComponent
        applyLoading={applyLoading}
        prizeAmount={prizeAmount}
        onFindByYear={onFindByYear}
        onSetYear={onSetYear}
        onSetPrizeAmount={onSetPrizeAmount}
        onSetShowYear={onSetShowYear}
        onSetNobelPrizes={onSetNobelPrizes}
      />
    </Sider>
  );
};

export default SidebarComponent;
