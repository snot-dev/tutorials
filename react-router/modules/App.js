import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
      return (
        <div>
          <h1>Ghettohub Issues</h1>
          <ul role="nav">
            <li><Link activeStyle={{ color: 'red' }} to="/about">About</Link></li>
            <li><Link activeStyle={{ color: 'red' }} to="/repos">Repos</Link></li>
          </ul>

          {/* add this */}
          {this.props.children}

        </div>
      )
  }
});
