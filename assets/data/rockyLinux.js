// https://wiki.rockylinux.org/rocky/version/

const name = 'Rocky Linux'

export const chartData = {
    labels: ["9", "8"],
    datasets: [
        {
            label: 'Active Support',
            data: [
                ['2022-07-14T00:00:00', '2027-05-31T00:00:00'],
                ['2021-05-01T00:00:00', '2024-05-31T00:00:00'],
            ],
            backgroundColor: "red",
        },
        {
            label: 'End of Life',
            data: [
                ['2027-06-01T00:00:00', '2032-05-31T00:00:00'],
                ['2024-06-01T00:00:00', '2029-05-31T00:00:00'],
            ],
            backgroundColor: "blue",
        },
    ]
}
