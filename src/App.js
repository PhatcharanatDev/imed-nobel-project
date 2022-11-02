import { Layout, Button } from "antd";
// Icon
import { AiFillFilter } from "react-icons/ai";
// Component
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import ContentComponent from "./components/Content/ContentComponent";

function App() {
  return (
    <div className="App h-screen bg-slate-100 ">
      <Layout>
        <section className="bg-[#024469]">
          <HeaderComponent />
        </section>

        {/* Filter mobile */}
        <section className="container mx-auto bg-slate-100 px-5 block md:hidden">
          <div className="bg-slate-100  text-end pt-3 px-5">
            <Button
              className="bg-[#024469] text-white md:hidden "
              type="primary"
              size="middle"
            >
              <div className="text-center ">
                <AiFillFilter className="text-xl inline" />
                <span> Filter</span>
              </div>
            </Button>
          </div>
        </section>

        <section className=" bg-slate-100">
          <Layout className="container mx-auto py-3 md:py-8 bg-slate-100 px-5 lg:px-12">
            <SidebarComponent />
            <ContentComponent />
          </Layout>
        </section>
      </Layout>
    </div>
  );
}

export default App;
