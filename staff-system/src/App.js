import Search from "./Components/Search";
import Header from "./Components/Header";
import StaffInfo from "./Components/StaffInfo";
import employeeInfo from "./data.json"
import AddEmployee from "./Components/AddEmployee";
import { useCallback, useEffect, useState } from "react";



function App() {

const [staffInfo, setStaffInfo] = useState([])

// const fetchData = useCallback(() => {
//   fetch(`./data.json`)
//   .then(res => res.json())
//   .then(data => setStaffInfo(data))
// }, [])
  
  
//   useEffect(() => {
//   fetchData()
// }, [fetchData])


  return (
    <div className="font-comfortaa">
      <div className="flex items-center mt-5 pl-1 md:pl-6">
        <div className="flex items-center">
          <img src="./images/abstract.png" alt="logo" className="w-8 ml-3" />
          <h1 className="hidden md:flex ml-3 font-comfortaa font-semibold text-2xl">CaED</h1>
        </div>
        <div className="flex items-center mx-auto md:mx-0 md:ml-20">
          <Search />
        </div>
      </div>
      <Header />
      <AddEmployee />
      <ul className="divide-y divide-gray-200">
        {employeeInfo.map(employee => (
          <StaffInfo key={employee.id}
            employee={ employee} />
        ))}
       
      </ul>
        
      

      

    </div>
  );
}

export default App;
