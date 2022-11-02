import './ContentComponent.css';
import { Layout, Pagination } from "antd";

// Components
import NobelPrizeItem from "../NobelPrize/NobelPrizeItem";
const { Content } = Layout;

const HeaderComponent = () => {
  return (
    <Content className="px-5 lg:px-12">
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          <NobelPrizeItem />
        </div>
        <Pagination
          className="text-end "
          defaultCurrent={1}
          total={50}
          showSizeChanger={false}
        />
      </div>
    </Content>
  );
};

export default HeaderComponent;
