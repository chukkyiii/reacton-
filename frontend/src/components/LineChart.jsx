import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2';
export default function LineChart({prev}) {
    const state = {
        labels: [...Array([...new Set(prev)].length).keys()], // tries
        datasets: [
            {
                label: 'Reaction',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(78, 172, 207, 100)',
                borderWidth: 2,
                data: [...new Set(prev)]
            }
        ]
    }
    
    return (
            <Line
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Reaction Time',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)