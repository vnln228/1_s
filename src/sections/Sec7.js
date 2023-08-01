import React, { Component } from 'react'

export default class Sec7 extends Component {
  render() {
    return (
      <div className='sec7'>
        <div className='s7Cont'>
            <div className='s7Vol'>Newsletter</div>
            <div className='s7Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</div>
            <div className='s7Form'>
                <input className='s7eml' type='email' placeholder='Your email'></input>
                <button className='s7btn'>Subscribe</button>
            </div>
        </div>
        
      </div>
    )
  }
}
