import { Layout } from "antd";
const { Header } = Layout;

const HeaderComponent = (props) => {
  const { year, showYear } = props;

  return (
    <Header className="bg-[#024469] width-full h-auto px-5 py-5 lg:px-12 ">
      <h1 className="text-white text-2xl mb-0 ">Nobel Prize</h1>
      {showYear && (
        <h2 className="text-base  font-normal text-slate-100 mb-0 ">
          ประจำปี ค.ศ. {year}
        </h2>
      )}
    </Header>
  );
};

export default HeaderComponent;
