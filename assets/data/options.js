const today = new Date();

export const chartOptions = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            // text: name
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    // console.log(context);
                    // return '[' + name + ' ' + context.label + '] ' + context.raw[0].substring(0, 7) + ' ~ ' + context.raw[1].substring(0, 7);
                    return context.raw[0].substring(0, 7) + ' ~ ' + context.raw[1].substring(0, 7);
                }
            },
        },
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    xMin: today,
                    xMax: today,
                    borderColor: 'green',
                    borderWidth: 4,
                    label: {
                        content: 'Today',
                        enabled: true,
                        position: 'end',
                        backgroundColor: 'rgba(255, 0, 0, 0.25)',
                        color: 'black'
                    }
                }
            }
        }
    },
    scales: {
        y: {
            stacked: true,
        },
        x: {
            type: 'time',
            time: {
                // Luxon format string
                // tooltipFormat: 'yyyy-MM-dd'
                tooltipFormat: 'yyyy-MM-dd'
            },
            min: new Date('2000-01-01T00:00:00'),
            max: new Date('2040-12-31T00:00:00')
        }
    },
}
