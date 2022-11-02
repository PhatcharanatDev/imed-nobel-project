import { Card, Collapse } from "antd";
const { Panel } = Collapse;

const NobelPrizeItem = () => {
  return (
    <Card
      title="Card Title"
      className=" w-full drop-shadow-sm rounded-md"
      headStyle={{
        whiteSpace: "normal",
        fontWeight: 600,
        fontSize: 1.125,
        lineHeight: 1.75,
      }}
    >
      <h2 className="text-sm md:text-base font-medium">Laureates</h2>
      <Collapse
        accordion
        bordered={false}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Laureate Name" className="text-base site-collapse-custom-panel">
          <p className="text-sm md:text-base font-medium text-justify">
            Motivation :{" "}
            <span className="text-sm md:text-base font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto laudantium nam sunt praesentium delectus dicta officia odit consequatur autem. Ipsa molestias minima pariatur ipsum ex! Sunt qui dicta amet!
            </span>
          </p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default NobelPrizeItem;
