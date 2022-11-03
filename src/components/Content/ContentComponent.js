import "./ContentComponent.css";
import { Layout, Pagination } from "antd";

// Components
import NobelPrizeItem from "../NobelPrize/NobelPrizeItem";
const { Content } = Layout;

const ContentComponent = (props) => {
  const { nobelPrizes, meta, pageSize, page, onChangePage } = props;

  const onPageChange = (page) => {
    onChangePage(page);
  };

  const nobelPrizeItems = nobelPrizes.map((nobelPrize, index) => {
    let laureates = nobelPrize.laureates;
    let title = `${nobelPrize.categoryFullName.en} (${nobelPrize.awardYear})`;
    return <NobelPrizeItem key={index} title={title} laureates={laureates} />;
  });

  return (
    <Content className=" md:px-12 ">
      <div className="bg-slate-100 text-center" style={{ minHeight: 580 }}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          {nobelPrizeItems}
        </div>

        {nobelPrizes.length > 0 ? (
          <Pagination
            className="text-end "
            current={page}
            defaultCurrent={1}
            total={meta.count}
            pageSize={pageSize}
            onChange={onPageChange}
          />
        ) : (
          <h1 className="text-xl text-slate-500 font-normal text-center">
            - Please select a year -
          </h1>
        )}
      </div>
    </Content>
  );
};

export default ContentComponent;
