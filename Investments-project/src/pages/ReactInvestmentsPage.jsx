import Header from '../components/Header'
import Investment from '../components/Investment'
import Main from '../components/Main'

import { allInvestments } from '../data/investments'

export default function ReactInvestmentsPage() {
    const {investments, reports} = allInvestments;

    return (
        <div>
            <Header>react-investments</Header>
            <Main>
                {investments.map(inv => {
                    const iReports = reports.filter(rep => rep.investmentId === inv.id);

                    return (
                    <Investment key={inv.id} description={inv.description}>
                        {iReports}
                    </Investment>
                    );
                })}
            </Main>
        </div>
    )
}