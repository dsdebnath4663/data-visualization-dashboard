import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import Filters from "./Filters";
import LineChart from "./charts/LineChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// l̥function Dashboard() {
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


      // Object.keys(filters).forEach((key) => {
      //   const values = Array.from(new Set(data.map((item) => item[key])));
      //   uniqueValues[key] = values;
      // });


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
    <Container>

      <Row>
        <h1>Data Visualization Dashboard

        </h1>
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          uniqueValues={uniqueValues}
        />
        <LineChart data={filteredData} />
      </Row>


    </Container>
  )
}

export default Dashboard;