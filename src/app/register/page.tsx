"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLLEGES, EVENTS } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    // Phone number validation (10 digits)
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    // Ensure at least one event is selected
    if (selectedEvents.length === 0) {
      toast.error("Please select at least one event to RSVP");
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { data, error } = await supabase.from("registrations").insert([
      {
        name: name,
        email: email,
        phone: phone,
        college: college,
        branch: branch,
        year: year,
        events: selectedEvents,
      },
    ]);

    if (error) {
      setLoading(false);
      console.error("Error inserting data:", error);
    } else {
      toast("Registration Successful!", {
        description: "We're excited to see you at the event!",
      });
      setLoading(false);
      console.log("Data inserted successfully:", data);
      setName("");
      setEmail("");
      setPhone("");
      setCollege("");
      setBranch("");
      setYear("");
      setSelectedEvents([]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6 p-5" onSubmit={handleSubmit}>
        <img
          className="w-full rounded-2xl"
          src="/cover.png"
          alt="cover"
          width={500}
          height={500}
        />
        <div className="space-y-2 md:py-5 py-5 text-center">
          <h1 className="md:text-3xl text-2xl font-bold">Event Registration</h1>
          <p className="text-gray-400 dark:text-gray-500 md:text-base text-sm tracking-wide">
            Fill out the form below to register for the event.
          </p>
        </div>
        <div className="space-y-4 pb-10">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              disabled={loading}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              disabled={loading}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="college">College</Label>
            <Select
              onValueChange={(value) => setCollege(value)}
              defaultValue={college}
              disabled={loading}
              name="college"
              required
            >
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
              disabled={loading}
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              placeholder="Enter your branch (CS, IS, EC)"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year of Study</Label>
            <Select
              onValueChange={(value) => setYear(value)}
              defaultValue={year}
              disabled={loading}
              name="year"
              required
            >
              <SelectTrigger id="year">
                <SelectValue placeholder="Select your year of study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4 pt-8">
            <h2 className="md:text-2xl text-xl font-bold text-primary">
              Event RSVP
            </h2>
            <div className="space-y-5 mb-2">
              {EVENTS.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">
                      {event.name} -{" "}
                      <span className="text-primary">{event.type}</span>
                    </p>
                    <div className="text-sm text-gray-400">
                      <p>Speaker: {event.speaker}</p>
                      <p>Date: {event.date}</p>
                      <p>Time: {event.time}</p>
                    </div>
                  </div>
                  {selectedEvents.includes(index) ? (
                    <Button
                      disabled={loading}
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        setSelectedEvents(
                          selectedEvents.filter((e) => e !== index)
                        );
                      }}
                    >
                      Un-RSVP
                    </Button>
                  ) : (
                    <Button
                      disabled={loading}
                      type="button"
                      onClick={() => {
                        setSelectedEvents([...selectedEvents, index]);
                      }}
                    >
                      RSVP
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-10">
            <Button type="submit" disabled={loading} className="w-full">
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 animate-spin"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              Register
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
