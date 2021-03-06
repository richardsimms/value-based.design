import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import Summary from '../components/Summary';

const suncorpPage = () => <Layout>
  <div>
  <div className="BannerSuncorp">
      <div className="SectionTitleGroup">
        <div className="SectionTitle"><h3>Suncorp App</h3></div>
      </div>
    </div>
    <div className="ContentGroup">      
      <h3>A single destination</h3>
      <p>For customers to manage their financial well-being. Enable them to see, store and do everything to manage their money, home, car and health needs in one place.</p>
      <p>Designed to make it easier for customers to achieve financial wellness and consolidate the Suncorp Group network of brands into one single app.</p>
      <p>The native iOS and Android app combined the functionality for Suncorp, AAMI, GIO, APIA, Shannons, Bingle and CIL existing mobile apps into one. A single destination and </p>
      <p><em>It’s the place to get your home, car, money and life sorted.</em></p>
      <p><em>View the app on <a href="/">iOS</a> and <a href="/">Android</a></em></p>
    </div>
    <div className="video">
      <ReactPlayer url='https://vimeo.com/285677207' playing loop 
        width='100%'
        height='100%'
      />
    </div>
    <div className="ContentGroup">      
      <h3>Discovery and experiments phase</h3>
      <p>I started at the beginning of the engagement in late August 2017 and meet the product owner who had a bucket list features and a 30 June 2018 deadline. </p>
      <p>We ran the project dual track and I started leading the discovery phase. Running workshops, talking to customers and experimenting with concepts. </p>
      <p>One of the first aspects we looked at was the main navigation from standard to custom patterns. To simplify a complex registration flow and allow customers to access the app from seven brands credentials.</p>
      <p>Throughout discovery, we continually gathered feedback from customers. We tested everything from the value proposition, the navigation concepts to the desirability of individual features. </p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><img className="Image" src={require('../images/img-large-suncorp.jpg')} alt="Three mobile app screens" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-appmap.jpg')} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    
    <div className="ContentGroup">      
      <h4>How it all hangs together</h4>
      <p>To communicate the overall picture of how all the features in the app would connect together and be accessed. I worked closely with the product owner and technician architects to design the information architecture in the form of an app map. It’s here the core pillars of the app can be seen and how the features hang together.</p>
    
      <h4>Senior leadership presentations</h4>
      <p>On projects of this size, communication is key and I was providing my stakeholder's holder with user testing summaries and prototypes of key experiences to present at their Senior Leadership team monthly updates.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square-suncorp.jpg')} alt="Initial concepts" />
      <img className="Image" src={require('../images/img-portrait-suncorp.jpg')} alt="Final overview screen" />
    </div>
    <div className="ContentGroup">      
      <h3>Design for development</h3>
      <p>As the project moved into development. The team size grew to seven development pods across three states. Each pod developing features for iOS and Android natively.</p>
      <p>I pivoted from discovery to creating wire flows, a series of screens linked by interactions and states for development. I worked on features from the categorisation of transactional banking to the overview and property sections. Finalising the interactions  with the product owners and technical architect for each platform. Mapping existing services from API’s to features or requesting new data to support new services.</p>
      <h4>Production designs</h4>
      <p>After setting the vision, I was responsible for keeping consistency within the app across multiple design teams in three different locations. Along with the UI lead, we ran multiple checkpoints. From peer crits, design reviews with the client and showcases.</p>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-suncorpflow.jpg')} alt="Wireflow of finacial screens" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-suncorpffi.jpg')} alt="Final Money and Spending screen from the Suncorp App" /></imageoverlap>
    </div>
    <Summary 
      title="App launch 🚀"
      text1="The iOS and Android apps launched with a fast and secure access to bank accounts. Categorised transactions, transfer money, pay bills and make payments."
      text2="Self-serves across Car, Home and Life Insurance, from updating address, pay renewals and new quotes. Make a claim and to be able to track the entire process from start to finish."
      text3="Suncorp App’s also has a Virtual Assistant chatbot powered by Microsoft Watson to answer questions about specific bank accounts and insurance policies."
    />
    <Footer />
  </div>
</Layout>

export default suncorpPage
