import React from 'react'
import SearchForm from '../components/SearchForm'

const page = () => {
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>Pitch Your Startup, <br /> Connect with /Enterpreneurs</h1>
        <p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm />
      </section>
    </>
  )
}

export default page