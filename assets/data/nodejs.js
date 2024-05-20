// https://nodejs.org/en/about/previous-releases

const name = 'Node.js'

export const chartData = {
    labels: ["22", "20", "18"],
    datasets: [
        {
            label: 'Current',
            data: [
                ['2024-04-24T00:00:00', '2024-10-28T00:00:00'],
                ['2023-04-18T00:00:00', '2023-10-23T00:00:00'],
                ['2022-04-19T00:00:00', '2022-10-24T00:00:00'],
            ],
            backgroundColor: "grey",
        },
        {
            label: 'Active',
            data: [
                ['2024-10-29T00:00:00', '2025-10-20T00:00:00'],
                ['2023-10-24T00:00:00', '2024-10-21T00:00:00'],
                ['2022-10-25T00:00:00', '2023-10-17T00:00:00'],
            ],
            backgroundColor: "red",
        },
        {
            label: 'Maintenance',
            data: [
                ['2025-10-21T00:00:00', '2027-04-30T00:00:00'],
                ['2024-04-22T00:00:00', '2026-04-30T00:00:00'],
                ['2023-10-18T00:00:00', '2025-04-30T00:00:00'],
            ],
            backgroundColor: "blue",
        },
    ]
}
