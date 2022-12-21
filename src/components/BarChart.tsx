import EChart from "./EChart";

type barChartOptions = {
  config: any;
};

export default function BarChart({ config }: barChartOptions) {
  let option = {
    xAxis: {
      type: "category",
      name: "Alcohol",
      nameLocation: "middle",
      nameGap: 30,
      data: config.map((item: any) => item.Alcohol),
    },
    yAxis: {
      type: "value",
      name: "Malic Acid",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        data: config.map((item: any) => item.Alcohol),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  return <>{config && <EChart option={option} />}</>;
}
