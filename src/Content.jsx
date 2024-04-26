import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'


const Content=()=> {
    const[data, setData] = useState([])
   

   console.log("hello");
 useEffect(() => {
    setInterval(()=>{
      axios
    .get("https://randomuser.me/api/")
    .then(function (response) {
      console.log(response.data);
      setData(response.data.results )
      
    })
    },4000)
 
},[])



  return (
    <div>
       <div className="wrap2">
        <div className="container">
          <div className="row">
            <div className="col12">
            {   
            data.map((r,index) =>{
              return(
                <div className="mgb" key={index}>
                  <div className='box' >
                    <h1 ><img className='img' src={r.picture.large} alt="" /></h1>
                    <h2 className='nm'>{r.name.title+" "+r.name.first+" "+r.name.last}</h2>
                    <div className="bx1">
                      <h3>Gender : </h3>
                      {r.gender}
                    </div>
                    <div className="bx2">
                      <h3>Age : </h3>
                      {r.dob.age}
                    </div>
                    <div className="bx1">
                      <h3>Country : </h3>
                      {r.location.country}
                    </div>
                    <div className="bx2">
                      <h3>City : </h3>
                      {r.location.city}
                    </div>

                    <div className="bx1">
                      <h3>Phone : </h3>
                      {r.cell}
                    </div>
                    <div className="bx2">
                      <h3>Email : </h3>
                      {r.email}
                    </div>
                    <div className="bx1">
                      <h3>PostCode : </h3>
                      {r.location.postcode}
                    </div>
                    <div className="bx2 mgb">
                      <h3>Street : </h3>
                      {r.location.street.name}
                    </div>
                  </div>
                </div>
             
            )
            }
            )
        }
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Content;