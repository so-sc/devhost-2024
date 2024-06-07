"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { COLLEGES, EVENTS } from "@/lib/constants"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterForm() {
  const [selectedEvents, setSelectedEvents] = useState<number[]>([])
  const router = useRouter()

  return (
    <form className="mx-auto container md:max-w-2xl space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Event Registration</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below to register for the event.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="phone"
            placeholder="Enter your phone no."
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="college">College</Label>
          <Select required>
            <SelectTrigger id="college">
              <SelectValue placeholder="Select your college" />
            </SelectTrigger>
            <SelectContent>
              {COLLEGES.map((college) => (
                <SelectItem key={college} value={college}>
                  {college}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="branch">Branch</Label>
          <Input
            id="branch"
            type="branch"
            placeholder="Enter your Branch (CS, IS, EC)"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year of Study</Label>
          <Select required>
            <SelectTrigger id="year">
              <SelectValue placeholder="Select your year of study" />
            </SelectTrigger>
            <SelectContent>1</SelectContent>
            <SelectContent>2</SelectContent>
            <SelectContent>3</SelectContent>
            <SelectContent>4</SelectContent>
            <SelectContent>5</SelectContent>
          </Select>
        </div>
        <div className="space-y-4 pt-8">
          <h2 className="text-xl font-bold text-primary">Event RSVP</h2>
          <div className="space-y-4 mb-2">
            {EVENTS.map((event, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">
                    {event.name} -{" "}
                    <span className="text-primary">{event.type}</span>
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>Speaker: {event.speaker}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p></p>
                  </div>
                </div>
                {selectedEvents.includes(index) ? (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => {
                      const _selectedEvents = selectedEvents
                      _selectedEvents.splice(_selectedEvents.indexOf(index), 1)
                      setSelectedEvents(_selectedEvents)
                      router.refresh()
                    }}
                  >
                    Un-RSVP
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => {
                      const _selectedEvents = selectedEvents
                      _selectedEvents.push(index)
                      setSelectedEvents(_selectedEvents)
                      router.refresh()
                    }}
                  >
                    RSVP
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>
    </form>
  )
}
