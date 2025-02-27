import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
      <AppSidebar/>
      <main className='bg-gray-200'>
        <SidebarTrigger className={"h-16 w-16"}/>
        <App />
      </main>
    </SidebarProvider>,
)
