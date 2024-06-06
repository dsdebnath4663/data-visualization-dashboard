import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import Filters from "./Filters";
import LineChart from "./charts/LineChart";
import Row from 'react-bootstrap/Row';
import HorizontalBarChart from "./charts/HorizontalBarChart";
import { Col } from "react-bootstrap";
import VerticalBarChart from "./charts/VerticalBarChart";
import DonutChart from "./charts/DonutChart";
import PieChart from "./charts/PieChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",

  });

  const [uniqueValues, setUniqueValues] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);

      const uniqueValues = {};
      for (const key of Object.keys(filters)) {
        const valueSet = new Set();
        for (const item of data) {
          const value = item[key];
          // console.log(key+" : " + value)
          valueSet.add(value);
        }
        uniqueValues[key] = Array.from(valueSet);
      }

      setUniqueValues(uniqueValues);
    };
    getData();
  }, []);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value, });
    // console.log(JSON.stringify(filters));
  };

  const filteredData = [];

  for (const item of data) {
    let isMatch = true; // Flag to track if the item matches all filters

    for (const key of Object.keys(filters)) {
      if (filters[key] !== "" && item[key] !== filters[key]) {
        isMatch = false;
        break; // Exit the inner loop if a filter doesn't match
      }
    }

    if (isMatch) {
      filteredData.push(item);
      console.log("Filtered data :" + item);

    }

  }


  return (
    <div className="margin">

      <h1 className="alignment">Data Visualization Dashboard  </h1>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        uniqueValues={uniqueValues}
      />

      <Row>
        <Col>
          <LineChart data={filteredData} />
        </Col>
        <Col>
          <HorizontalBarChart data={filteredData} />
        </Col>
      </Row>

      <Row>
        <Col>
          <VerticalBarChart data={filteredData} />
        </Col>
        <Col>
          <DonutChart data={filteredData} />
        </Col>
        <Col>
          <PieChart data={filteredData} />
        </Col>
      </Row>









    </div>
  )
}

export default Dashboard;