import React, { Component } from 'react'

const sideNavStyle = {
  'padding': '10px',
}

const textDecorationStyle = {
  'listStyle': 'none'
}

export default class SideNav extends Component {

  renderNavItems = () => {
    const { methods } = this.props

    return methods.map((method, i) => (
      <div>
        <h3>{method.name}</h3>
        <ul key={`${method.name}${i}`} style={textDecorationStyle}>
          { method.objects.map((object, i) => (
            <li key={object.name} style={textDecorationStyle}>
              <a href={`#${object}`}>{object.name}</a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }

  render() {
    return (
    <div style={sideNavStyle}>
      {this.renderNavItems()}
      </div>
    )
  }
}