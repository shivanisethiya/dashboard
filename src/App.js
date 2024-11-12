import AccountContainer from "./components/AccountContainer";
import ProfileContainer from "./components/ProfileContainer";




function App() {
  return (
    <div className="container">
   
      <div>
     
        <h1>My Finance Dashboard</h1>
        <p style={{ color: "gray", marginTop: "-15px" }}>
          Welcome to XPay payment portal
        </p>
      </div>
      
      <div className="App">
      {/* <div className="background-overlay"></div> */}
        <ProfileContainer />
        <AccountContainer />
      </div>
    </div>
  );
}

export default App;
