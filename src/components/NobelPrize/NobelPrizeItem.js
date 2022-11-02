import { Card, Collapse } from "antd";
const { Panel } = Collapse;

const NobelPrizeItem = (props) => {
  const { title, laureates } = props;
  
  const laureateItems = laureates && laureates.map((laureate, index) => {
    let laureateName =
      "fullName" in laureate
        ? laureate.fullName.en
        : "" || "orgName" in laureate
        ? laureate.orgName.en
        : "";
    let motivation = laureate.motivation.en

    return (
      <Panel key={index} header={laureateName} className="text-base site-collapse-custom-panel">
        <p className="text-sm md:text-base font-medium text-justify">
          Motivation :{" "}
          <span className="text-sm md:text-base font-normal">{motivation}</span>
        </p>
      </Panel>
    );
  });

  return (
    <Card
      title={title}
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
        {laureateItems}
      </Collapse>
    </Card>
  );
};

export default NobelPrizeItem;
