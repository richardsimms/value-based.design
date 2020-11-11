import React from 'react';
import Layout from '../components/layout';
import "../components/layout.css";


const form = () => ( <Layout>
     <blank></blank>
  <div className="HeroGroup">
      <span>Start designing impact, not opinions.</span>
      <h1>Design for clarity when everything is uncertain </h1>    
      <h2>A free guide to teach you how to make profitable design decisions even in these crazy times. </h2> 
       <form name="test" method="post" action="/success" data-netlify="true" netlify-honeypot="bot-field" data-netlify="true">
         <p><label class="visuallyhidden">Name</label><input type="text" title="name" placeholder="Your name" name="name" /></p>
         <p><label class="visuallyhidden">Email</label><input type="email" placeholder="Your email" name="email" /></p>
         <p><button type="submit">SEND ME THE FREE GUIDE</button></p>
      </form> 
      
      <hr />
      <form name="contact-new" method="POST" data-netlify="true" action="/success" >
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </div>

    


</Layout>
)
export default form


    