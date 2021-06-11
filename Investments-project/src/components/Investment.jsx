import Report from "./Report";

export default function Investment({ children: reports = [], description = ''}) {
    if (!reports) {
        return <div>Sem dados para exibição</div>;
    }

    const percentCalc = (actualValue, previousValue) => {
         const percentValue = (actualValue * 100 / previousValue);
         return percentValue >= 100 ? Math.round(percentValue - 100) : Math.round(-100 + percentValue);
    }

    const reportsOrdered = reports.sort((a, b) => {
        if (a.month > b.month) return 1;
        if (a.month < b.month) return -1;
        return 0;
    })

    const finalReports = reportsOrdered.map((x, index) => {
        if (index === 0) {
            return {...x, percent: 0}
        } else {
            let previousValue = parseFloat(reportsOrdered[index-1].value);
            let percent = percentCalc(x.value, previousValue);
            return {...x, percent: percent}
        }
    });

    const totalPercentage = (finalReports[finalReports.length -1].value / finalReports[0].value -1) * 100;

    const colorPercentage = totalPercentage >= 0 ? 'text-green-400' : 'text-red-400'

    return (
        <div className="border p-2 m-2">
            <h2 className="text-lg text-center font-semibold">
                {description}
            </h2>
            <h3 className={`${colorPercentage} text-center font-semibold`}>Rendimento total: {totalPercentage.toFixed(2)}%</h3>
            {finalReports.map(rep => {
                return (
                    <Report key={rep.id}>
                        {rep}
                    </Report>
                )
            })}
        </div>
    )
}
