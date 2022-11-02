import { Layout } from "antd";
const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="container mx-auto bg-[#024469] px-5 py-5 h-auto lg:px-12 ">
      <h1 className="text-white text-2xl mb-0 ">Nobel Prize</h1>
      <h2 className="text-base  font-normal text-slate-100 mb-0 ">
        ประจำปี ค.ศ. {1901}
      </h2>
    </Header>
  );
};

export default HeaderComponent;
