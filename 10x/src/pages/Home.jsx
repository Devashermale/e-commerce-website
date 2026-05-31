import Navbar from '../components/Navbar'
function Home() {
  return (
    <>  
    <div className="fixed w-full top-0"> 
      <Navbar />
      </div>
   
    <div className="p-4 grid grid-cols-3 gap-4 mt-16">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFybHklMjBzaG9wcGluZyUyMGNvbXBsZXRlfGVufDB8fDB8fHww&w=1000&q=80" alt="Home" className="w-full h-auto rounded-lg shadow-md" />
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFybHklMjBzaG9wcGluZyUyMGNvbXBsZXRlfGVufDB8fDB8fHww&w=1000&q=80" alt="Home" className="w-full h-auto rounded-lg shadow-md " />
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFybHklMjBzaG9wcGluZyUyMGNvbXBsZXRlfGVufDB8fDB8fHww&w=1000&q=80" alt="Home" className="w-full h-auto rounded-lg shadow-md " />  
    </div>
    </>
  )
}

export default Home