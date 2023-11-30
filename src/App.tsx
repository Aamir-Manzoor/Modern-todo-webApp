import React from 'react'
import Menu from "./components/Menu/Menu"
import TasksSection from "./components/TasksSection/TasksSection"
import AccountData from "./components/AccountData/AccountData"
const App: React.FC = () => {
  return (
    <div>
    <div className='bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text text-xs'>
        {
          
        }
        <Menu/>
        <TasksSection/>
        <AccountData/>
    </div>
    </div>
  )
}

export default App;