import { useEffect, useState } from "react";
import EChart from "./EChart";

type barChartOptions = {
  config: any;
};

export default function ScatterPlot({ config }: barChartOptions) {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    let arr: any = [];
    config.forEach((k: any) => {
      arr.push([k["Color intensity"], k.Hue]);
    });
    setNewData(arr);
  }, [config]);

  let option = {
    xAxis: {
      name: "Color Intensity",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      name: "Hue",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        symbolSize: 20,
        data: newData,
        type: "scatter",
      },
    ],
  };

  return <>{config && <EChart option={option} />}</>;
}
