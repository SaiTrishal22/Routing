import { createFileRoute } from '@tanstack/react-router'
import Compose from '@/components/SideBar/Compose'

export const Route = createFileRoute('/_Layout/_SideBar/compose')({
  component: Compose,
})


