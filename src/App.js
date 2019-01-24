import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import { Container, Col, Row } from 'reactstrap'
import ScrollArea from 'react-scrollbar'

const productState = sdkBle[0].id

const languageState = sdkBle[0].lang

const methodState = sdkBle[0].modules


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: productState,
      languages: languageState,
      methods: methodState,
    }

    this.handleProductChange = this.handleProductChange.bind(this)
  }

  handleProductChange(e) {
    this.setState({
      products: e.target.value
    })
  }

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header 
          methods={this.state.methods} 
          language={this.state.languages} 
          product={this.state.products} 
          onclick={this.handleProductChange}
        />
        <Container fluid>
          <Row>
            <Col xs='auto'>
              <ScrollArea speed={0.8} className="area" contentClassName="content" vertical={true}>
                <SideNav 
                  methods={this.state.methods} 
                />
              </ScrollArea>
            </Col>
            <Col>
              <MethodView
                methods={this.state.methods} 
                language={this.state.languages}
              />
            </Col>
          </Row>  
        </Container>
      </Layout>
      </div>
    );
  }
}

export default App;
