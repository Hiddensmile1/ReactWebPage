import React from 'react'
import  "./style.css"

const Contact = () => {

  const [firstName, setFirstName ] = React.useState("")
  const [lastName, setLLastName ] = React.useState("")
  const [email, setEmail ] = React.useState("")
  const [message, setMessage ] = React.useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = {firstName, lastName, email, message}
    console.log("you click me ", formData)
  }
  
  return (
    <div className='contactCon'>
      <form className='formCon' onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
         <div className='inputCon' >
          <label>First Name :</label>
          <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name' />

         </div>
         <div className='inputCon' >
          <label>Last Name :</label>
          <input value={lastName} onChange={(e)=>{setLLastName(e.target.value)}} placeholder='Last Name' />

         </div>

         <div className='inputCon' >
          <label>Email :</label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />

         </div>

         <div className='inputCon' >
          <label>Message :</label>
          <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} cols={54} rows={10} placeholder='Message' />

         </div>

         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact