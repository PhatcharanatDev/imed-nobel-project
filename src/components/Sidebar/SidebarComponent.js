import { Layout, Card, Button, Select } from "antd";
const { Sider } = Layout;
const { Option } = Select;

const SidebarComponent = () => {
  return (
    <Sider className="bg-white w-72 min-w-0 max-w-sm flex-none  duration-300 h-full left-0 -translate-x-96  md:translate-x-0 md:static z-40 absolute top-0 drop-shadow-md">
      <Card className="border-0 md:border-1 rounded-md drop-shadow-none md:drop-shadow-sm" bodyStyle={{ padding: 16 }}>
        <div className="content-center grid gap-4">
          <div className="mx-2">
            <h3 className="mb-1 text-slate-500 font-normal">Select a year</h3>
            <Select
              showSearch
              allowClear={true}
              placeholder="Search to Select"
              className="w-full"
            >
              <Option key="1" value="1901">
                1901
              </Option>
              <Option key="2" value="1901">
                1902
              </Option>
            </Select>
          </div>
          <Button className="mx-2 bg-[#024469] text-white ">
            Apply Filter
          </Button>
          <hr className="mx-0" />
          <div className="flex justify-between mx-2">
            <h2 className="mb-1 text-slate-500 font-normal">Prize Amount</h2>
            <p>0</p>
          </div>
        </div>
      </Card>
    </Sider>
  );
};

export default SidebarComponent;
