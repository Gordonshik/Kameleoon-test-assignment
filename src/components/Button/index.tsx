import * as React from "react"
import './style.css'

interface IButton {
    isResults: boolean
}

const Button: React.FC<IButton> = ({...props}) => {
    const { isResults } = props

    return <button
            type='button'
            className={`btn ${isResults ? 'results' : 'finalize'}`}>
                {isResults ? 'Results' : 'Finalize'}
            </button>
}

export default Button