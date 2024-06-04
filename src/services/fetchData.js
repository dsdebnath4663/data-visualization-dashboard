const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8081/api/energy-reports/all");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    console.log("Received data size:", jsonData.length);

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can handle the error further if needed
    throw error; // Propagate the error if necessary
  }
};

export default fetchData;
