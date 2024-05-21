// https://www.php.net/supported-versions.php

const name = 'PHP'

export const chartData = {
    labels: ["8.3", "8.2", "8.1"],
    datasets: [
        {
            label: 'Active Support',
            data: [
                ['2023-11-23T00:00:00', '2025-12-31T00:00:00'],
                ['2022-12-08T00:00:00', '2024-12-31T00:00:00'],
                ['2021-11-25T00:00:00', '2023-11-25T00:00:00'],
            ],
            backgroundColor: "red",
        },
        {
            label: 'Security Support',
            data: [
                ['2026-01-01T00:00:00', '2027-12-31T00:00:00'],
                ['2025-01-01T00:00:00', '2026-12-31T00:00:00'],
                ['2023-11-26T00:00:00', '2025-12-31T00:00:00'],
            ],
            backgroundColor: "blue",
        },
    ]
}
