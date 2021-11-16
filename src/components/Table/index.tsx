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

    const getTableRows = (arr: Test[]) => arr.map(item =>
            <tr key={item.id}>
                <td className='table-name'>{item.name}</td>
                <td className='table-type'>{item.type}</td>
                <td className='table-status'>{item.status}</td>
                <td className='table-name'>{item.name}</td>
                <td className='table-btn'>
                    <button>
                        <span className='btn-text'>
                            Results
                        </span>
                    </button>
                </td>
            </tr>
    )

    const tableRows = getTableRows(tests)

    const getTableTop = (arr: string[]) => arr.map(item => <th key={item} className='table-top'>{item}</th>)
    const tableTop = <tr className='top-row'>{getTableTop(headerColumns)}</tr>

    return <div className='table-body'>
        <h1 className='title'>Dashboard</h1>
             <input
                 className='main-input'
                 placeholder='What test are you looking for?'/>
        <table>
            <thead>
                {tableTop}
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div>


}

export default Table