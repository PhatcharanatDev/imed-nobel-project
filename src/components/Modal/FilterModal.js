import { Modal } from "antd";
import FilterComponent from "../Filter/FilterComponent";

const FilterModal = (props) => {
  const {
    applyLoading,
    filterModalOpen,
    prizeAmount,
    onFindByYear,
    onSetYear,
    onSetPrizeAmount,
    onSetShowYear,
    onSetNobelPrizes,
    onSetFilterModalOpen,
  } = props;


  return (
    <Modal
      title="Filters"
      open={filterModalOpen}
      onCancel={() => {onSetFilterModalOpen(false)}}
      width={350}
      footer={null}
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
    </Modal>
  );
};

export default FilterModal;
