import "./ContentComponent.css";
import { Layout, Pagination } from "antd";

// Components
import NobelPrizeItem from "../NobelPrize/NobelPrizeItem";
const { Content } = Layout;

const HeaderComponent = (props) => {
  const { nobelPrizes } = props;

  const nobelPrizeItems = nobelPrizes.map((nobelPrize, index) => {
    let laureates = nobelPrize.laureates;
    let title = `${nobelPrize.categoryFullName.en} (${nobelPrize.awardYear})`;
    return <NobelPrizeItem key={index} title={title} laureates={laureates} />;
  });

  return (
    <Content className=" md:px-12 ">
      <div className="bg-slate-100" style={{ minHeight: 580 }}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          {nobelPrizeItems}
        </div>

        {nobelPrizes.length > 0 && (
          <Pagination
            className="text-end "
            defaultCurrent={1}
            total={50}
            showSizeChanger={false}
          />
        )}
      </div>
    </Content>
  );
};

export default HeaderComponent;
