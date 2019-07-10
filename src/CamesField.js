import React, {Component} from 'react'
import Card from './Card'
import './index2.css'

  class CamesField extends Component {

    state={
      colors: [],
      choused: '',
      chousedID: '',
      choused2ID: '',
      inGame: false,
      steps: 0
    }
    rndmClr = () => {
     return Math.round(Math.random() * 255)
    }
    
    chouse = (color, id) => {      
      this.setState({
        inGame: true, 
        steps: this.state.steps + 1
      }) 
      if(this.state.choused.length > 0) {
        this.setState({choused2ID: id})
        if(this.state.choused === color) {
          if(this.state.chousedID !== id) {       
          let colors = this.state.colors;
          colors[colors.indexOf(color)] = 'rgb(0, 0, 0)';
          colors[colors.indexOf(this.state.choused)] = 'rgb(0, 0, 0)';
          this.setState({
            colors,
            choused: '',
            inGame: false
          }) 
          if(this.state.colors.every((v)=>v==='rgb(0, 0, 0)')){
              alert(`Pоздравляю! пройдено зы ${this.state.steps} шaгоb`)
          }
         }
        } else {
         setTimeout(()=>{
          this.setState({
            choused: '',
            chousedID: '',
            choused2ID: '',
            inGame: false
          })
         }, 1200)          
        }
      } else {
        this.setState({
          choused: color,
          chousedID: id
        })
      }     
    }
    
    componentDidMount() {     
      let i = 18;
      let clrs = [];
      while(i) {        
        let color = `rgb(${this.rndmClr()}, ${this.rndmClr()}, ${this.rndmClr()})`;
        clrs.push(color);
        i--;
      }
      let colors = [...clrs, ...clrs];
      colors.sort(()=>Math.random()-0.5)
      this.setState({
        colors
      })
    }

    render(){
      const {colors, inGame, chousedID, choused2ID, steps} = this.state;
      return(
    <div className='cardfield'>
          <h1>Найдите одиноковые оттенки:</h1>  
        {[...Array(36)].map((v, i)=><Card 
        key={i} chouse={this.chouse} color={colors[i]}
          id={i} inGame={inGame} chousedID={chousedID} choused2ID={choused2ID}
          />)}
        <p className='step'>Потрачено: {steps}</p>
    </div>
      )
    }  
  }

export default CamesField