"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { allocation: 60, type: "ELETRONICOS" },
  { allocation: 45, type: "PERIFERICOS" },
  { allocation: 12, type: "SMARTPHONES" },
  { allocation: 4, type: "REVERSA" },
]

const Grafico = () => {
  return (
    <div style={{ width: "100%", height: 320, padding: "10px" }}>
      <ResponsiveContainer>
        <BarChart data={data} barSize={40}>
          <CartesianGrid stroke="#E2E8F0" vertical={false} />
          <XAxis axisLine={false} tickLine={false} dataKey="type" />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={(value: number) => `${value}%`}
          />
          <Bar
            key="allocation"
            isAnimationActive={false}
            dataKey="allocation"
            fill="#319795"
            radius={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Grafico