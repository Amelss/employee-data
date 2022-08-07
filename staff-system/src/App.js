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
  const [filterBy, setFilterBy] = useState("")


  const filteredEmployees = employeeData.filter(
    item => {
      return (
        item.employeeFirstName.toLowerCase().includes(query.toLowerCase()) ||
        item.employeeLastName.toLowerCase().includes(query.toLowerCase()) ||
        item.startDate.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.department.toLowerCase().includes(query.toLowerCase()) ||
        item.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }
  ).sort((a, b) => {
    let order = (orderBy === 'ascending' ) ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    
  }).sort((a, b) => {
    let location =(filterBy === 'location') ? 1 : -1
    return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? -1 * location : 1 * location
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
    <div className="font-comfortaa bg-white min-h-screen">
      <div className=" ">
        <div className="">
          
     
      <div className="flex items-center pl-1 md:pl-6">
        <div className="flex items-center mt-5">
          <img src="./images/abstract.png" alt="logo" className="w-8 ml-3" />
          <h1 className="hidden md:flex ml-3 font-comfortaa font-semibold text-2xl">
            CaED
          </h1>
        </div>
        <div className="flex items-center mx-auto md:mx-0 md:ml-20">
          <Search
            query={query}
            onQueryChange={(myQuery) => setQuery(myQuery)}
          />
        </div>
      </div>
      <Header
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
        filterBy={filterBy}
        onFilterByChange={(mySort) => setFilterBy(mySort)}
          />
          <div className="pb-10">
            <AddEmployee
        onSendEmployeeInfo={(myEmployee) =>
          setEmployeeData([...employeeData, myEmployee])
        }
        lastId={employeeData.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
          </div>
      
<hr className="w-full"/>
      <ul className=" mt-20 pb-10 mx-auto w-96 md:w-[1000px] text-black">
        {filteredEmployees.map((employee) => (
          <StaffInfo key={employee.id} employee={employee} />
        ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
