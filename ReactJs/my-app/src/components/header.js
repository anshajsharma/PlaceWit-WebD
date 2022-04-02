import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <div>
          <div className='header_container' >
              <div>
                    <div className='name' >
                    <h1> ANSHAJ KUMAR </h1>
                </div>
                <div className='position' >
                    <h3>SDE, Amazon</h3>
                </div>
              </div>
              <div className='avatar_div' >
                  <img className='avatar' src="https://avatars.githubusercontent.com/u/55790104?s=400&u=ab4b22c7bfc65f979a5c53c91911af0640787bd1&v=4" alt='profile' />
              </div>
          
          </div>
          
      </div>
    )
  }
}
