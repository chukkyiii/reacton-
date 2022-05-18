import React, {useState} from 'react'
import styles from './Reactbox.module.css'
import Lightning from '../assets/icons8-lightning-bolt-96.png'
import Refresh from '../assets/icons8-refresh-480.png'
import LineChart from './LineChart'
export default function Reactbox() {
    // setup the state
    const [state, setState] = useState({
        timerStart: 0,
        timerOn: false,
        timerDelt: 0,
        timerEnd: 0,
        auto: false,
        ready: false,
        go: false,
        disabled: false,
        reacted: false,
        prev: [],
        previ: 0,
    })

    // functions

    const readyState = () => {
        setState({
            ...state,
            ready: true,
            disabled: true,
        })
        setTimeout(() => {
            setState({
                ...state,
                go: true,
                ready: false,
                timerStart: Date.now(),
                disabled: false,
            })
        }, Math.random() * 10000)
    }

    const stopTimer = () => {
        setState({
            ...state,
            timerOn: false,
            timerEnd: Date.now(),
            reacted: true
        })
    }

    const resetTimer = () => {
        // ...state carries all the state that is not being changed
        setState({
            ...state,
            auto: false,
            ready: false,
            go: false,
            reacted: false,
            previ: state.prev[state.prev.length - 1],
            disabled: false,
        })
    }

    let goTime = null

    if (state.go === true) {
        goTime = 'ready'
    }
    
    if (state.reacted){
        state.disabled = true
        state.timerDelt = state.timerEnd - state.timerStart
        state.prev.push(state.timerDelt)
    }

    return (
        <div>
            <div className={styles.test_container}>
                <button disabled={state.disabled} id={goTime} className={state.reacted === true ? styles.blueState : state.go === true ? styles.goState : state.ready === true ? styles.readyState : styles.reac_container} onClick={state.go === true ? stopTimer : readyState}>
                    {state.reacted || state.go || state.auto || state.ready === true ? '' : <img src={Lightning} alt="react"/>}
                </button>
                <div className={styles.test_bar}>
                    <div className={styles.bar_item}>
                        {state.previ ? state.previ + 'ms' : '-'}
                    </div>
                    <div className={styles.bar_item}>
                        <div>
                            {state.reacted === true ? state.timerDelt + 'ms' : '-'}
                        </div>
                    </div>
                    <button className={styles.reset_button} onClick={resetTimer}>
                        <img src={Refresh} alt="Refresh" className={styles.icon}/>
                    </button>
                </div>
            </div>
            <div className={styles.test_chart_container}>
                <div className={styles.test_chart_wrapper}>
                    <div className={styles.chart}>
                        <LineChart prev={state.prev}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// TODO: auto build on change