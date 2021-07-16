import React from 'react'
import BalanceSurmary from '../../components/balanceSummary/BalanceSummary'
import BasicTable from '../../components/table/Table'
import TableTop from '../../components/table/TableTop'

function Balances() {
    return (
        <>
            <BalanceSurmary/>
            <TableTop/>
            <BasicTable/>
        </>
    )
}

export default Balances
