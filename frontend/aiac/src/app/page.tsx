import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { JSX, SVGProps } from "react";


export default function Home() {
  return (
    <main className=" bg-white">
      <div className="grid grid-cols-1  md:grid-cols-[300px_1fr] gap-6">
        <Card className="bg-background p-6 shadow-lg">
          <CardHeader>
            <CardTitle>BMW IX Control</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="font-medium">Car Status</div>
              <div className="flex items-center gap-2">
                <ul>
                  <li className="flex  items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <span>Bateria</span>
                  </li>
                  <li className="flex  items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span>Camera</span>
                  </li>
                  <li className="flex  items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span>AIAC</span>
                  </li>
                  <li className="mt-2">
                    Condução: <span className="font-bold">Automatico</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Temperatura</div>
              <div className="flex items-center gap-2">
                <span>25°C</span>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Opções</div>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-motion" />
                <Label htmlFor="alert-motion">
                  Ronco do Motor
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-sound" />
                <Label htmlFor="alert-sound">
                  Alerta de Som
                </Label>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Ações</div>
              <div className="flex gap-2">
                <Button variant="outline">Manual</Button>
                <Button>Automatico</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-red-700 text-red-200 font-bold">Desligar</Button>
                <Button className="bg-green-500 font-bold">Ligar</Button>
              </div>

            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-6">
          <Card className="bg-background p-6 shadow-lg">
            <CardHeader>
              <CardTitle>Camera 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Camera 1 Feed" className="w-full h-auto rounded-md" />
            </CardContent>
          </Card>
          <Card className="bg-background p-6 shadow-lg">
            <CardHeader>
              <CardTitle>Frame</CardTitle>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="bg-background p-6 shadow-lg w-full">
        <CardHeader>
          <CardTitle>Camera Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-04-15</TableCell>
                <TableCell>10:30 AM</TableCell>
                <TableCell>Main Entrance</TableCell>
                <TableCell>
                  <Badge variant="outline">Online</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-14</TableCell>
                <TableCell>3:45 PM</TableCell>
                <TableCell>Lobby</TableCell>
                <TableCell>
                  <Badge variant="outline">Offline</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-13</TableCell>
                <TableCell>8:20 AM</TableCell>
                <TableCell>Parking Lot</TableCell>
                <TableCell>
                  <Badge variant="outline">Online</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-12</TableCell>
                <TableCell>11:55 PM</TableCell>
                <TableCell>Rear Entrance</TableCell>
                <TableCell>
                  <Badge variant="outline">Online</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-11</TableCell>
                <TableCell>6:05 PM</TableCell>
                <TableCell>Lobby</TableCell>
                <TableCell>
                  <Badge variant="outline">Offline</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}


function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}