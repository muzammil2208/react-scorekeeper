import React,{useState} from 'react';
import './App.css'
import Player1 from './components/Player1'
import Player2 from './components/Player2'



function App()
{
  const[p1,setp1]=useState(0);
  const[p2,setp2]=useState(0);
  const[limit,setlimit]=useState(5);
  let winstate=false;
  const p1increment=()=>
  {
    if(p1>=limit||p2>=limit)
    {
      setp1(0);
      setp2(0)
    }
    else{
      setp1(p1+1);
    }
    
  }
  const p2increment=()=>
  {
    if(p2>=limit||p1>=limit)
    {
      setp2(0)
      setp1(0)
    }
    setp2(p2+1);
  }
  const setlimit_func=(event)=>
  {
    setlimit(eval(event.target.value))
    setp1(0)
    setp2(0)
  }
  const submitlimit=(event)=>{
    console.log("submited value"+limit)
    event.preventDefault();
  }
  let win;

 
  if(p1==limit)
  {
    
    win=<p className="alert alert-primary">player 1 won</p>
    
    
    
  }
  else if(p2==limit)
  {
    win=<p className="alert alert-danger">player 2 won</p>
    winstate=false;
    
  }
 
  
  return (
    <div className="container">
        <div className="main-div card">
         <img src="https://images.unsplash.com/photo-1560012057-4372e14c5085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" className="card-img-top" width="200px" height="200px" alt=""/>
          <div className="card-body">
            <h2>Score keeper Application</h2>
                <div className="row">
                  <div className="col">
                    Player 1'S Score:
                    <Player1 parentcallback={p1increment} value={p1}/>
                  </div>
                  <div className="col">
                      <label className="form-label">Set Win Limit</label>
                        <form onSubmit={submitlimit}>
                         <input className="form-control" onChange={setlimit_func} list="datalistoptions" value={limit}/>
                        </form>
                  </div>
                  <div className="col">
                    Player 2's Score
                    <Player2 parentcallback={p2increment} value={p2}/>
                  </div>
                </div>
              <div className="row">
                <div className="col">{win}</div>
              </div>
              

          </div>
      </div>
    </div>
    
        
    
  
  );

}



 

export default App;
