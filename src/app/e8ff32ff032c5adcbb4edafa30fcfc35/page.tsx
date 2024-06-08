"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { EVENTS } from "@/lib/constants";

export default function Page() {
  const [eventsData, setEventsData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [combinedArray, setCombinedArray] = useState<number[]>([]);
  const [eventCounts, setEventCounts] = useState<{ [key: string]: number }>({});
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: true });

      if (data) {
        // Parse the strings into arrays and combine them into a single array
        const combinedArray = data.reduce((acc, event) => {
          const parsedArray = JSON.parse(event.events);
          return acc.concat(parsedArray);
        }, []);

        // Count the occurrences of each digit
        const counts = combinedArray.reduce((acc: any, num: number) => {
          acc[num] = (acc[num] || 0) + 1;
          return acc;
        }, {});

        setEventsData(data);
        setCombinedArray(combinedArray);
        setEventCounts(counts);
      }

      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen py-5 flex justify-center items-center gap-10">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto px-5 w-full">
        {/* <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Combined Array</h2>
              <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                {JSON.stringify(combinedArray)}
              </div>
            </div> */}
        <div className="py-10">
          <h2 className="text-2xl font-semibold mb-10">Event Counts</h2>
          <div className="flex flex-col gap-5">
            {EVENTS.map((event, index) => (
              <div
                key={index}
                className="flex justify-between items-center hover:bg-primary hover:text-black transition-all duration-200 border-primary border-2 gap-10 p-4 rounded-lg"
              >
                <span>{event.name}</span>
                <span className="font-semibold">{eventCounts[index] || 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
