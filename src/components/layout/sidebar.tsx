"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  ChevronDown,
  Code,
  CreditCard,
  Home,
  Landmark,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { ChainPayLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const menuItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/payments", label: "Payments", icon: CreditCard },
  { href: "/settlements", label: "Settlements", icon: Landmark },
  { href: "/payouts", label: "Payouts", icon: Wallet },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
];

export default function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <ChainPayLogo className="w-8 h-8 text-primary" />
          <span className="text-xl font-semibold text-primary">ChainPay</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={item.label}
                  asChild
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
          <Collapsible.Root asChild>
            <SidebarMenuItem>
              <Collapsible.Trigger asChild>
                <SidebarMenuButton
                  className="justify-between"
                  tooltip="Developer Tools"
                >
                  <div className="flex items-center gap-2">
                    <Code />
                    <span>Developers</span>
                  </div>
                  <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:-rotate-180" />
                </SidebarMenuButton>
              </Collapsible.Trigger>
              <Collapsible.Content asChild>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <Link href="/developers/api-keys" legacyBehavior passHref>
                      <SidebarMenuSubButton
                        isActive={pathname.startsWith("/developers/api-keys")}
                        asChild
                      >
                        <a>API Keys</a>
                      </SidebarMenuSubButton>
                    </Link>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Link href="/developers/webhooks" legacyBehavior passHref>
                      <SidebarMenuSubButton
                        isActive={pathname.startsWith("/developers/webhooks")}
                        asChild
                      >
                        <a>Webhooks</a>
                      </SidebarMenuSubButton>
                    </Link>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Link href="/developers/logs" legacyBehavior passHref>
                      <SidebarMenuSubButton
                        isActive={pathname.startsWith("/developers/logs")}
                        asChild
                      >
                        <a>Logs</a>
                      </SidebarMenuSubButton>
                    </Link>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <Link href="/developers/docs" legacyBehavior passHref>
                      <SidebarMenuSubButton
                        isActive={pathname.startsWith("/developers/docs")}
                        asChild
                      >
                        <a>Documentation</a>
                      </SidebarMenuSubButton>
                    </Link>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </Collapsible.Content>
            </SidebarMenuItem>
          </Collapsible.Root>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/settings" legacyBehavior passHref>
              <SidebarMenuButton
                isActive={isActive("/settings")}
                tooltip="Settings"
                asChild
              >
                <a>
                  <Settings />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
