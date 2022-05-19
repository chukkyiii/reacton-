import React from 'react'

let announce = {
    textAlign: 'left',
    padding: '1.5rem',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',
}

let active = {
    color: 'orange'
}

let callout = {
    textAlign: 'left',
    padding: '1.5rem',
    width: '51rem',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',

}

let container = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all 0.2s ease 0s',
}
export default function About() {
    return (
        <div style={container}>
            <h3>
                How to Use!
            </h3>
            <div style={callout}>
                <p>
                    ⚫ - Start / ready <br />
                    🔴 - Get ready. <br />
                    🟢 - Click! <br />
                    🔵 - You should see your results underneath. <br />
                </p>
            </div>
            <p style={announce}>Look on my <a style={active} href='https://chukkyiii.tech/'>blog</a> for updates</p>
        </div>
    )
}