import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <Tabs>
        <TabList className="grid grid-cols-3 text-center my-tab-list gap-1 text-white">
          <Tab className="bg-blue-500 py-2">Title 1</Tab>
          <Tab className="bg-blue-500 py-2">Title 2</Tab>
          <Tab className="bg-blue-500 py-2">Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
