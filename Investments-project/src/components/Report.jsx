import Item from "./Item";

export default function Report({children: report}) {

    const {month, year, percent} = report;

    const value = parseFloat(report.value).toFixed(2);

    const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

    const isPercentPositive = percent >= 0 ? 'bg-green-100' : 'bg-red-100';

    return (
        <div>
            <ul>
                <li className={`${isPercentPositive} flex flex-row items-center justify-start space-x-8`}>
                    <Item date>{`${months[month - 1]}/${year} `}</Item>
                    <Item value>{` R$ ${value}`}</Item>
                    <Item percent>{`${percent}%`}</Item>
                </li>
            </ul>  
        </div>
    )
}
