// src/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute} from '@tanstack/react-router'
import UserLogin from '@/components/Login';


export const Route = createFileRoute('/')({
  component: Home,
  
})

function Home() {

  return (
    <>
     <div>
      <UserLogin />
     </div>
    </>
  )
}