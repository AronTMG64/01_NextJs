import React from 'react'

const index = () => {
  return (
    <div>
      <main>
        <h1>Contact</h1>
        <a href="/">Index</a>
        <a href="/about">About</a>
      </main>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <textarea cols={30} rows={10} placeholder='Message'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default index