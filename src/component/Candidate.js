import React, { Component } from 'react'
import './candidate.css';


export default class Candidate extends Component {
  constructor(props){
    super(props)
    this.state={
      voteState:this.props.buttonState,
      displayVote:"none",
      voteTotal:'--'
    }
  }

alreadyVoted=async()=>{
  let didVote=await window.contract.didVote()
  if(!didVote){
    this.setState({voteState:false})
  }
  else{
    this.setState({displayVote:'block'})
  }
}

 addVote=async()=>{
    
    this.props.modButton();
    window.contract.addVote({candidate:this.props.title})
    alert('Thankyou for voting');
    this.setState({displayVote:'block'})
  }

getTotal=async()=>{
   let total= await window.contract.getVotes({candidate:this.props.title})
   this.setState(
    {
      voteTotal:total
    }
   )

  }


componentDidMount(){
  this.alreadyVoted()
  this.getTotal()
}

componentDidUpdate(prevProps){
  if(prevProps!==this.props){
    this.setState({voteState:true})
  }
}



  render() {
    return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.picture} className="card-img-top" alt="..." />
         <div className="card-body">
         <h5 className="card-title  d-flex justify-content-center">{this.props.title}</h5>
          <p className="card-text d-flex justify-content-center">
              {this.props.description}
         </p>
     
         <button type="button" style={{marginBottom:20}} onClick={this.addVote} disabled={this.state.voteState} >Vote</button>
         
         <ul className="list-group" style={{display:this.state.displayVote}}>
         <li className="list-group-item" style={{fontSize:12}}>Total Vote {this.state.voteTotal}</li>
         </ul>
      </div> 
     </div>

   
    );
  }
}
