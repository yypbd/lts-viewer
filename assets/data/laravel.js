// https://laravel.com/docs/11.x/releases

const name = 'Laravel'

export const chartData = {
    labels: ["11", "10", "9"],
    datasets: [
        {
            label: 'Bug Fixes',
            data: [
                ['2024-03-12T00:00:00', '2025-09-02T00:00:00'],
                ['2023-02-14T00:00:00', '2024-08-05T00:00:00'],
                ['2022-02-08T00:00:00', '2023-08-07T00:00:00'],
            ],
            backgroundColor: "red",
        },
        {
            label: 'Security Fixes',
            data: [
                ['2025-09-03T00:00:00', '2026-03-12T00:00:00'],
                ['2024-08-06T00:00:00', '2025-02-04T00:00:00'],
                ['2023-08-08T00:00:00', '2024-02-06T00:00:00'],
            ],
            backgroundColor: "blue",
        },
    ]
}
