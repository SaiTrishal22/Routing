import { createFileRoute } from '@tanstack/react-router'
import Profile from '@/components/NavBar/userId/Profile'

export const Route = createFileRoute('/_Layout/_NavBar/$userId/users/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
  <>
    <Profile />
  </>
  )
}
