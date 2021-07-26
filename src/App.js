import './App.css';


function App() {
  return (
    <div className = 'App'>
      <div className='topContent'>
       <h1>Welcome to the Potluck Planner!</h1>
          <img  className= 'grillImg' src= 'https://i.kym-cdn.com/photos/images/original/001/556/116/4fb.png' alt = 'Get grilling!' width='300vh'/>
      </div>
      <div className= 'buttons'>
        <button  className= 'login'>Login</button>
        <button className= 'signup'>Sign Up</button>
      </div> 
    </div>
  );
}
const grillImgStyle = {
 
}
export default App;
