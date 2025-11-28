import {
  ArrowUpRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const payments = [
  {
    id: "pay_1",
    customer: "Liam Johnson",
    email: "liam@example.com",
    amount: "250.00",
    currency: "USDC",
    status: "Completed",
    date: "2023-06-23",
    avatar: "https://picsum.photos/seed/liam/40/40",
  },
  {
    id: "pay_2",
    customer: "Olivia Smith",
    email: "olivia@example.com",
    amount: "150.00",
    currency: "ETH",
    status: "Pending",
    date: "2023-06-24",
    avatar: "https://picsum.photos/seed/olivia/40/40",
  },
  {
    id: "pay_3",
    customer: "Noah Williams",
    email: "noah@example.com",
    amount: "350.00",
    currency: "USDC",
    status: "Completed",
    date: "2023-06-25",
    avatar: "https://picsum.photos/seed/noah/40/40",
  },
  {
    id: "pay_4",
    customer: "Emma Brown",
    email: "emma@example.com",
    amount: "450.00",
    currency: "BTC",
    status: "Failed",
    date: "2023-06-26",
    avatar: "https://picsum.photos/seed/emma/40/40",
  },
  {
    id: "pay_5",
    customer: "James Jones",
    email: "james@example.com",
    amount: "550.00",
    currency: "USDC",
    status: "Completed",
    date: "2023-06-27",
    avatar: "https://picsum.photos/seed/james/40/40",
  },
];

type StatusVariant = "default" | "secondary" | "destructive" | "outline";
const statusVariantMap: Record<string, StatusVariant> = {
  Completed: "default",
  Pending: "secondary",
  Failed: "destructive",
};

export function RecentPayments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>
            You have made {payments.length} payments this month.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/payments">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={payment.avatar}
                        alt="Avatar"
                        data-ai-hint="person face"
                      />
                      <AvatarFallback>
                        {payment.customer.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="font-medium">{payment.customer}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={statusVariantMap[payment.status] || "outline"}
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="font-medium">${payment.amount}</div>
                  <div className="text-sm text-muted-foreground">
                    {payment.currency}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Issue Refund</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
