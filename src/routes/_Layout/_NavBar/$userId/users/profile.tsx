import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_Layout/_NavBar/$userId/users/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_Layout/_NavBar/users/profile"!</div>
}
