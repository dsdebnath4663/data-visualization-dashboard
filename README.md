
To create the data visualization dashboard as per the assignment requirements, I follow these steps:

### Step 1: Set Up the Project
1. **Initialize a new React project** using Create React App or a similar setup.
    ```bash
    npx create-react-app data-visualization-dashboard
    cd data-visualization-dashboard
    ```
2. **Install necessary libraries** such as `D3.js` for charts.
    ```bash
    npm install d3 
    ```
2. **Install axios** .
    ```bash
    npm install axios
    ```

3. Install `react-bootstrap` and Bootstrap's CSS:
   ```bash
   npm install react-bootstrap bootstrap
   ```

4. Import Bootstrap's CSS in your `index.js` file:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

### Step 2: Fetch Data from API
Assume that the API provides data matching the schema. Create a service to fetch data from the API.

[Backend Code Repo](https://github.com/dsdebnath4663/VisualizationBackend)

```javascript
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/energy-reports/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
```

### Step 4: Build the Dashboard
```javascript
npm run start
```
### Step 5: Finalize and Test
 **Test the dashboard** to ensure it works correctly with all the filters and visualizations.

<img src="https://github.com/dsdebnath4663/data-visualization-dashboard/blob/master/resources/screencapture-localhost-3000-2024-06-06-20_50_33.png"/>
