import { useState, useEffect } from "react"
import * as React from 'react'
import './style.css'
import { getSites, getTests } from '../../api'

enum Type {
    CLASSIC = "CLASSIC",
    SERVER_SIDE = "SERVER_SIDE",
    MVT = "MVT"
}

enum Status {
    DRAFT = "DRAFT",
    ONLINE = "ONLINE",
    PAUSED = "PAUSED",
    STOPPED = "STOPPED"
}

interface Site {
    id: number
    url: string
}

interface Test {
    id: number
    name: string
    type: Type
    status: Status
    siteId: number
}

interface  ITable {
    arr: string[]
    map(param: (item: object) => void): any
    headerColumns: string[]
}

const Table: React.FC<ITable> = ({...props}) => {
    const [companies, setCompanies] = useState([])
    const [tests, setTests] = useState([])

    useEffect(() => {
        getSites()
            .then(res => setCompanies(res?.data))
    })

    useEffect(() => {
        getTests()
            .then(res => setTests(res?.data))
    });


    const headerColumns = [
        'NAME',
        'TYPE',
        'STATUS',
        'SITE',
        ''
    ]

    const obj = [
        {
            id: 1,
            name: 'Order basket redesing',
            type: 'Classic',
            status: 'Online',
            siteId: 'market.company.com'
        }
    ]

    const getTableRows = (arr: Test[]) => arr.map(item =>
        <thead>
            <tr>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td><button /></td>
            </tr>
        </thead>
    )

    const tableRows = getTableRows(tests)

    const getTableTop = (arr: string[]) => arr.map(item => <th>{item}</th>)
    const tableTop = <><tr>{getTableTop(headerColumns)}</tr><tr></tr></>

    return <div className='table-body'>
        <h1 className='title'>Dashboard</h1>
             <input
                 className='main-input'
                 placeholder='What test are you looking for?'/>
        <table>
            {tableTop}
            {tableRows}
        </table>
    </div>


}

export default Table