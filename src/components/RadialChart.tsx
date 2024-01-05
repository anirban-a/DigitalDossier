import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  PolarAngleAxis,
} from "recharts";

interface ChartProps {
  data: number[];
  labels: string[];
}

function formatData(values: number[], labels: string[]) {
  return values.map((v, idx) => {
    return { skill: labels[idx], level: v };
  });
}

export default function RadialChart({ data, labels }: ChartProps) {
  const formattedDataList = formatData(data, labels);
  console.log(formattedDataList);

  return (
    <ResponsiveContainer width={550} height={400}>
      <RadarChart
        outerRadius={150}
        width={730}
        height={350}
        data={formattedDataList}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis angle={45} domain={[0, 4]} />
        <Radar
          name="Skills"
          dataKey="level"
          stroke="#e23008"
          fill="#e4b517"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
