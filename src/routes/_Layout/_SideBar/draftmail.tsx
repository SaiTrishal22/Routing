import { createFileRoute } from '@tanstack/react-router'
import DraftMail from '@/components/SideBar/DraftMail'

export const Route = createFileRoute('/_Layout/_SideBar/draftmail')({
  component: DraftMail,
})


