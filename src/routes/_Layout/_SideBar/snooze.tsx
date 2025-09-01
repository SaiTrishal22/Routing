import { createFileRoute } from '@tanstack/react-router';
import Snooze from '@/components/SideBar/Snooze';

export const Route = createFileRoute('/_Layout/_SideBar/snooze')({
  component: Snooze,
})


