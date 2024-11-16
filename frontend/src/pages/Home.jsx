import React from 'react'
import Headers from '../components/headers'
import Specialitymenu from '../components/Specialitymenu'
import Topdoctor from '../components/Topdoctor'
import Banner from '../components/Banner'


const home = () => {
  return (
    <div>
      <Headers/>
      <Specialitymenu />
      <Topdoctor />
      <Banner />
    </div>
  )
}

export default home