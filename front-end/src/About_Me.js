import { Link } from 'react-router-dom'
import './Home.css'
import pic from './headshot_smiling.jpg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About_Me = props => {
  return (
    <>
      <h1>About Me</h1>
      <img src={pic} alt="Picture of Me!" />;
      <p>Hi, I'm Pranav! Im a current junior at NYU studying finance @ Stern and computer science @ CAS. My professional interests lie within the intersection of business and technology, but still trying to figure out exactly where. I also hope to start a startup at some point, but I'm still looking for the perfect idea. In the past, I've been lucky enough to work for a couple startups doing machine learning work while also doing research in the field. I've also had experience working more traditional finance roles like hedge funds and venture capital.</p>
      <p><br></br></p>
      <p>Outside of professional interests, I love going to the gym, exploring the city, watching bad romcoms, and playing board games. Im also involved with a couple communities at NYU, including the entrpreneurship society (@nyu.eeg), the sustainable business club (net impact), and a couple of the more traditional finance clubs. I've also been trying to read more this semester, so if you know any great books, hit me up!</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About_Me
