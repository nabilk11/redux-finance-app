import ChartHeader from "@/components/ChartHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea={"a"}>
        <ChartHeader
          title="Revenue and Expenses"
          subtitle="Upper line represents Revenue, Lower line represents Expenses"
          sidetext="+4.0%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <defs>
              <linearGradient
                id="colorRevenue"
                x1={"0"}
                y1={"0"}
                x2={"0"}
                y2={"1"}
              >
                <stop
                  offset={"5%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset={"95%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id="colorExpenses"
                x1={"0"}
                y1={"0"}
                x2={"0"}
                y2={"1"}
              >
                <stop
                  offset={"5%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset={"95%"}
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" style={{ fontSize: "12px" }} />
            <YAxis
              domain={[8000, 23000]}
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "12px" }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"b"}>
        <ChartHeader
          title="Profit and Revenue"
          subtitle="Purple line represents Profit, Green line represents Revenue"
          sidetext="+4.0%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke={palette.grey[800]}
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" style={{ fontSize: "12px" }} />
            <YAxis
              yAxisId={"left"}
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px" }}
            />
            <YAxis
              yAxisId={"right"}
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              type="monotone"
              yAxisId={"left"}
              dataKey="profit"
              dot={true}
              stroke={palette.tertiary[500]}
            />
            <Line
              type="monotone"
              yAxisId={"right"}
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"c"}></DashboardBox>
    </>
  );
};

export default Row1;
