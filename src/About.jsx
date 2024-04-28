import React from 'react'
import './App.css'
import './bg.css'
export default function About() {
  return (
    <div>
      <div className="wrap4">
        <div className="container">
          <div className="row">
            <div className="col12">
            <div className="navab">
            <h1 className='abh'> About </h1>
            <h3 className='absh'> Random User App </h3>
            <p className='abp'>Randomuser App uses Random user api that gives random user data. I used React hooks like useEffect, useState, react-router-dom and Axios in Randonuser App.</p>
            <p className='abp'>A random user generator app which let you select either 1, 3 or 5 random users with their name, country and photo. Developed as part of the Skillcrush Javascript course, practising Javascript and use of API's. Making use of the Random User Generator API <a className='abp' href='https://randomuser.me/'>(https://randomuser.me/)</a>.</p>
            <p className='abp'>This API was created in August 2013 with a goal to create a free and easy to use service to generate fake random user data such as name, email, address, username for placeholders for application testing.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
