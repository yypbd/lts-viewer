// https://ubuntu.com/about/release-cycle

const name = 'Ubuntu'

export const chartData = {
    labels: ["24.04", "22.04", "20.04", "18.04", "16.04", "14.04"],
    datasets: [
        {
            label: 'Standard',
            data: [
                ['2024-04-01T00:00:00', '2029-04-30T00:00:00'],
                ['2022-04-01T00:00:00', '2027-04-30T00:00:00'],
                ['2020-04-01T00:00:00', '2025-04-30T00:00:00'],
                ['2018-04-01T00:00:00', '2023-04-30T00:00:00'],
                ['2016-04-01T00:00:00', '2021-04-30T00:00:00'],
                ['2014-04-01T00:00:00', '2019-04-30T00:00:00'],
            ],
            backgroundColor: "red",
        },
        {
            label: 'Pro',
            data: [
                ['2029-05-01T00:00:00', '2034-04-30T00:00:00'],
                ['2027-05-01T00:00:00', '2032-04-30T00:00:00'],
                ['2025-05-01T00:00:00', '2030-04-30T00:00:00'],
                ['2023-05-01T00:00:00', '2028-04-30T00:00:00'],
                ['2021-05-01T00:00:00', '2026-04-30T00:00:00'],
                ['2019-05-01T00:00:00', '2024-04-30T00:00:00'],
            ],
            backgroundColor: "blue",
        },
        {
            label: 'Legacy',
            data: [
                ['2034-05-01T00:00:00', '2036-04-30T00:00:00'],
                ['2032-05-01T00:00:00', '2034-04-30T00:00:00'],
                ['2030-05-01T00:00:00', '2032-04-30T00:00:00'],
                ['2028-05-01T00:00:00', '2030-04-30T00:00:00'],
                ['2026-05-01T00:00:00', '2028-04-30T00:00:00'],
                ['2024-05-01T00:00:00', '2026-04-30T00:00:00'],
            ],
            backgroundColor: "orange",
        },
    ]
}
