import { useUser } from "@/components/StoreUserDetails";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export default function Profile() {
  const { user } = useUser();

  if (!user) return <p>No user logged in</p>;

  return (
    <>
      <Sidebar>
      <SidebarContent>
        {/* Profile Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <div className="flex items-center gap-3 p-2">
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-12 h-12 rounded-full border"
                  />
                  <div className="text-left">
                    <p className="font-bold text-sm">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.company.title}</p>
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Personal Info */}
        <SidebarGroup>
          <SidebarGroupLabel>Personal Info</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem><span>Username: {user.username}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Phone: {user.phone}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Age: {user.age}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Gender: {user.gender}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Birth Date: {user.birthDate}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Blood Group: {user.bloodGroup}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Eye Color: {user.eyeColor}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Hair: {user.hair.color} ({user.hair.type})</span></SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Address */}
        <SidebarGroup>
          <SidebarGroupLabel>Address</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem><span>{user.address.address}</span></SidebarMenuItem>
            <SidebarMenuItem><span>{user.address.city}, {user.address.state}</span></SidebarMenuItem>
            <SidebarMenuItem><span>{user.address.country}</span></SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Company */}
        <SidebarGroup>
          <SidebarGroupLabel>Company</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem><span>{user.company.name}</span></SidebarMenuItem>
            <SidebarMenuItem><span>{user.company.department}</span></SidebarMenuItem>
            <SidebarMenuItem><span>{user.company.title}</span></SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Bank & Crypto */}
        <SidebarGroup>
          <SidebarGroupLabel>Finance</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem><span>Bank Card: {user.bank.cardNumber}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Expire: {user.bank.cardExpire}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Crypto: {user.crypto.coin}</span></SidebarMenuItem>
            <SidebarMenuItem><span>Wallet: {user.crypto.wallet}</span></SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* System Info */}
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem><span>IP: {user.ip}</span></SidebarMenuItem>
            <SidebarMenuItem><span>MAC: {user.macAddress}</span></SidebarMenuItem>
            <SidebarMenuItem><span>User Agent: {user.userAgent}</span></SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </>
  );
}
