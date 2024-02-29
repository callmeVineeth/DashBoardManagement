import React,{useState} from 'react'
import { Button,Form,Row, Col } from 'react-bootstrap'

function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  

    const handleForm =(e)=>{
      e.preventDefault(e);
      console.warn('Form Submitted :', name, email, password)

      handleClearForm();

    }

    const handleClearForm =()=>{
      setName('');
      setEmail('');
      setPassword('');
     
    }

  return (
    <div className=' d-flex justify-content-center'>

<main className=' w-75 d-flex flex-column p-5 align-items-center justify-content-center bg-info-subtle'>
        <h1>SignUp</h1>

        <Form className=' mt-4' onSubmit={handleForm}>
        <Row className="mb-3 gap-3">
        <Form.Control value={name} onChange={e=>setName(e.target.value)}  placeholder=" Name" />
        <Form.Control value={email} onChange={e=>setEmail(e.target.value)}  type='email' placeholder=" Email" />
        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Row>

        
          <Button variant="primary" type="submit" className='m-1 mx-md-4'>
            SignUp
          </Button>
          <Button variant="primary" type='button' className='m-1  mx-md-4' onClick={handleClearForm}>
            Clear
          </Button>
        </Form>
        </main>
    </div>
  )
}

export default SignUp