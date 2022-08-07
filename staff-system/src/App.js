import Search from "./Components/Search";
import Header from "./Components/Header";
import StaffInfo from "./Components/StaffInfo";
import AddEmployee from "./Components/AddEmployee";
import { useCallback, useEffect, useState } from "react";



function App() {

  const [employeeData, setEmployeeData] = useState([])
  const [sortBy, setSortBy] = useState("employeeFirstName")
  const [orderBy, setOrderBy] = useState("ascending")
  const [query, setQuery] = useState("")


  const filteredEmployees = employeeData.filter(
    item => {
      return (
        item.employeeFirstName.toLowerCase().includes(query.toLowerCase()) ||
        item.employeeLastName.toLowerCase().includes(query.toLowerCase()) ||
        item.startDate.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'ascending') ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
  })

  const fetchData = useCallback(() => {
    fetch(`./data.json`)
    .then(res => res.json())
    .then(data => setEmployeeData(data))
  }, [])
    
    
    useEffect(() => {
    fetchData()
  }, [fetchData])


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
      <Header
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={ mySort => setSortBy(mySort)} />
      <AddEmployee />
      <ul className="divide-y divide-gray-200">
        {filteredEmployees.map(employee => (
          <StaffInfo key={employee.id}
            employee={ employee} />
        ))}
       
      </ul>
        
      

      

    </div>
  );
}

export default App;
