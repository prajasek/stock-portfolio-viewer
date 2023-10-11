import { Link, Outlet, useLoaderData } from "react-router-dom";

function App() {

    let data = useLoaderData();
    console.log(data);
    return (
      <>
      <Link to="/detail/1"><h1>Detail 1 </h1></Link>
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