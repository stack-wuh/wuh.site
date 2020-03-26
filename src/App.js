import React, {useEffect} from 'react';
import './App.css';
import Header from 'components/header'
import BasicLayout from 'layout/basic'
import Footer from 'layout/footer'
import { connect } from 'react-redux'
import Pupop from 'utils/pupop'
import useTitleVisible from 'hooks/useTitleVisible'

function App({route}) {
  useTitleVisible()
  useEffect(() => {
    let myPopup = new Pupop()
    window.addEventListener('click', (e) => { 
      let { pageX, pageY } = e
      myPopup.init({ pageX, pageY })
    }, false)
  }, [])
  return (
    <div className="App">
      <Header />
      <BasicLayout route={route}></BasicLayout>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = ({ CountRoot: { counter, asyncCounter } }) => {
  return { counter, asyncCounter }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
