import { Navbar, Welcome, Footer, Transactions } from "./components";

import videoBg from "/Users/almicke/project_web3.0/client/images/preview.mp4";
const App = () => (
  <div className="min-h-screen">
    <video className="video" autoPlay loop muted>
      <source src={videoBg} type="Video/mp4"/>
    </video>
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>    
    <Transactions />
    <Footer />
  </div>
);

export default App;
