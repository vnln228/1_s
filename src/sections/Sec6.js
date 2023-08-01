import React, { Component } from 'react'

export default class Sec6 extends Component {
  render() {
    const s6labs =[
        {
            numb: '57.6 bn',
            txt: 'LOAN PORTFOLIO'

        },{
            numb: '0.95%',
            txt: 'CLASSIFIED LOAN PORTFOLIO'

        },{
            numb: '388.5%',
            txt: 'CLASSIFIED LOAN Coverage'

        },{
            numb: '50.4 bn',
            txt: 'Deposit'

        },{
            numb: '6.1 bn',
            txt: 'Shareholders equity'

        },{
            numb: '18.51%',
            txt: 'Capital Adequacy Ratio'

        },{
            numb: '8.5 bn',
            txt: 'Market Capitalization'

        },{
            numb: 'AAA',
            txt: 'Credit Rating'

        }
    ]
    return (
      <div className='sec6'>
        <div className='s6Cont'>
            <div className='s6txt'>
                <div className='s6Vol'>Our best results for the year</div>
                <div className='s6Desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</div>
            </div>
            <div className='s6Labs'>{
                s6labs.map((s)=>{
                    return(
                        <div className='s6Lab'>
                            <div className='s6Lnumb'>{s.numb}</div>
                            <div className='s6Ltxt'>{s.txt}</div>
                        </div>
                    )   
                })
            }</div>
        </div>
      </div>
    )
  }
}
