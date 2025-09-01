import { createFileRoute } from '@tanstack/react-router';
import SentMail from '@/components/SideBar/SentMail';

export const Route = createFileRoute('/_Layout/_SideBar/sentmail')({
  component: SentMail,
})

