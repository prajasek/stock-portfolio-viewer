import { Outlet } from "react-router-dom";

function App() {
    return (
      <>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <div style={{ width:'400px'}}> 
          <h1 style={{textAlign: 'center'}}> Stock Dashboard </h1> 
        </div>
      </div>
   

        <Outlet/>
      </>
    )
}

export default App