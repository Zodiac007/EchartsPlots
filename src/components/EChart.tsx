import { useState, useEffect, useRef } from "react";
import { init } from "echarts";

type EchartOptions = {
  option: any;
};

export default function EChart({ option }: EchartOptions) {
  const chartRef = useRef<HTMLDivElement>(null);
  let [chartEl, setChartEl] = useState<any>(chartRef);

  useEffect(() => {
    if (chartRef.current !== null) {
      if (!chartEl.current) {
        chartEl.setOption(option);
      } else {
        setChartEl(init(chartRef.current));
      }
    }
  }, [option, chartEl]);

  window.addEventListener("resize", function () {
    chartEl.resize();
  });

  return <div className="chart" ref={chartRef}></div>;
}
