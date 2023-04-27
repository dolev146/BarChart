import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { x: 1, y: 12 },
  { x: 2, y: 23 },
  { x: 3, y: 45 },
  { x: 4, y: 30 },
  { x: 5, y: 19 },
];

const SimpleBarChart = ({ direction }) => {
  const ltr = direction !== 'rtl';
  const xAxisType = ltr ? 'number' : 'numberReversed';

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      layout="vertical"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type={xAxisType} />
      <YAxis dataKey="x" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="y" fill="#8884d8" orientation="vertical" />
    </BarChart>
  );
};

export default SimpleBarChart;
