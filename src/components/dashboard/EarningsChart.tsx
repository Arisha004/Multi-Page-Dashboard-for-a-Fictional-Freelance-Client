import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', earnings: 2400, projects: 4 },
  { month: 'Feb', earnings: 1398, projects: 3 },
  { month: 'Mar', earnings: 9800, projects: 8 },
  { month: 'Apr', earnings: 3908, projects: 5 },
  { month: 'May', earnings: 4800, projects: 6 },
  { month: 'Jun', earnings: 3800, projects: 4 },
  { month: 'Jul', earnings: 4300, projects: 5 },
  { month: 'Aug', earnings: 5200, projects: 7 },
  { month: 'Sep', earnings: 4100, projects: 6 },
  { month: 'Oct', earnings: 6200, projects: 8 },
  { month: 'Nov', earnings: 5500, projects: 7 },
  { month: 'Dec', earnings: 7200, projects: 9 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-medium">
        <p className="font-medium text-foreground">{`${label}`}</p>
        <p className="text-sm text-primary">
          {`Earnings: $${payload[0].value.toLocaleString()}`}
        </p>
        <p className="text-sm text-muted-foreground">
          {`Projects: ${payload[0].payload.projects}`}
        </p>
      </div>
    );
  }
  return null;
};

export default function EarningsChart() {
  return (
    <Card className="shadow-soft animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Monthly Earnings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                className="text-sm text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-sm text-muted-foreground"
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="earnings" 
                radius={[4, 4, 0, 0]}
                className="fill-primary hover:opacity-80 transition-opacity"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}