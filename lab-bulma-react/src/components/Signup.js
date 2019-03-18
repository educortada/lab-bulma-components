import React, { Component } from 'react';

// Components
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Message from './Message'

class Signup extends Component {
  render() {
    return (
      <main>
        <header>
          <Navbar isPrimary />
        </header>
        <section>
          <div className="container">
            <form>
              <FormField label="Name" type="text" placeholder="Alex Smith" />
              <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
              <FormField label="Password" type="password" placeholder="Password" />
              <CoolButton button isPrimary>Submit</CoolButton>
            </form>
          </div>
        </section>
        <section>
          <div className="container">
            <Message isInfo title="Hello World">Lorem ipsum <strong>dolor sit amet</strong>.</Message>
          </div>
        </section>
      </main>
    )
  }
}

export default Signup;