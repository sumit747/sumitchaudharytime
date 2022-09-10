import React, {useState } from 'react';
import axios from 'axios';

function Login() {
  const  [user,setuser] = useState([rep]);
// first button 
  const fatchData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/comments/1')
    .then((response)=>{
      console.log(response.data);
      const rep = response.data
      localStorage.setItem('Zero',JSON.stringify(rep))
    })
    .catch((error)=>{ 
      console.log(error.data);
    });
    const user = new Date().toLocaleTimeString();
    setuser(user)
  };
  // useEffect(() =>{
  //   localStorage.setItem('user',JSON.stringify(dataa))
  //   setdataa(dataa)
  // },[dataa])
// second Button
  const [user1,setuser1] = useState([]);
  const fatchData1 =() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/1')
    .then((response)=>{
      console.log(response.data);
      const rep1 = response.data
      localStorage.setItem('First', JSON.stringify(rep1))
    });
    const user1 = new Date().toLocaleTimeString();
    setuser1(user1);
  }
  // useEffect(() =>{
  //   localStorage.setItem('second', JSON.stringify(user1));
  // },[user1])
// third Button
  const [user2, setuser2] = useState([]);
  const fatchData2 =() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>{
      console.log(response.data);
      const rep2 = response.data
      localStorage.setItem('Second',JSON.stringify((rep2)))
    });
    const user2 = new Date().toLocaleTimeString();
    setuser2(user2);
  }
  // useEffect(()=> {
  //     localStorage.setItem('third', JSON.stringify(user2));
  //   },[user2]);
// four button
  const [user3, setuser3] = useState([]);
  const fatchData3 =() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
      console.log(response.data);
      const rep3 = response.data
      localStorage.setItem('Third',JSON.stringify(rep3))
    });
    const user3 = new Date().toLocaleTimeString();
    setuser3(user3);
  }
  //  useEffect(() =>{
  //   localStorage.setItem('four', JSON.stringify(user3));
  //  },[user3])
  return(
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12 bg-color-red">
            <center><h4>Test App</h4></center>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p>Start Time :- {user}</p>
                    <p>End  Time :-{user}</p>
                    <p>Start Data Time :-{user} </p>
                    <p>End Data Time :-{user}</p>
                  </div>
                </div>           
              </div>
              <div className=" col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p>Start Time :- {user1}</p>
                    <p>End  Time :- {user1}</p>
                    <p>Start Data Time :-{user1}</p>
                    <p>End Data Time :-{user1}</p>
                  </div>
                </div>           
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p>Start Time :- {user2}</p>
                    <p>End  Time :- {user2}</p>
                    <p>Start Data Time :-{user2}</p>
                    <p>End Data Time :-{user2}</p>
                  </div>
                </div>           
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p>Start Time :-{user3}</p>
                    <p>End  Time :-{user3}</p>
                    <p>Start Data Time :-{user3}</p>
                    <p>End Data Time :-{user3}</p>
                  </div>
                </div>           
              </div> 
          </div>
      </div>
      <center>
      <button className='btn btn-outline-primary' onClick={fatchData}>Submit0</button>
      <button className='btn btn-outline-primary' onClick={fatchData1}>Submit1</button>
      <br/><br/>
      <button className='btn btn-outline-primary'onClick={fatchData2}>Submit2</button>
      <button className='btn btn-outline-primary'onClick={fatchData3}>Submit3</button>
      </center>
    </div>
    
  );
}
export default Login;
