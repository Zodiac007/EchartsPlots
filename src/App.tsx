import "./App.css";
import BarChart from "./components/BarChart";
import ScatterPlot from "./components/ScatterPlot";
import { data } from "./utils/data";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Scatter Plot</h3>
        <ScatterPlot config={data} />
      </div>
      <div>
        <h3>Bar Chart</h3>
        <BarChart config={data} />
      </div>
    </div>
  );
}

export default App;
