"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { getHomeContent } from "@/lib/getHomeContent";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Settings } from "lucide-react"
import { useState as useReactState } from "react"

export default function CustomItinerary() {
  const [homeContent, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home-content")
        const data = await response.json()
        setHomeContent(data)
      } catch (error) {
        console.error("Error fetching home content:", error)
        setHomeContent({
          travellertypes: [
            { title: "The Pilgrims", image: "/icon-pilgrims.png" },
            { title: "The Cultural Explorer", image: "/icon-culture.png" },
            { title: "The Adventurer", image: "/icon-adventure.png" },
            { title: "Nature Seeker", image: "/icon-nature.png" },
            { title: "Family Planner", image: "/icon-family.png" },
            { title: "The Budget Traveller", image: "/icon-budget.png" },
            { title: "The Luxury Traveller", image: "/logo-family.png" },
            { title: "The Solo Traveller", image: "/logo-solo.png" },
          ],
          typeOfTravellerTitle: "What Type of Traveller Are You?",
        })
      }
    };
    fetchData();
  }, []);

  const [formData, setFormData] = useReactState({
    destination: "",
    startDate: "",
    endDate: "",
    travalerTypes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Building itinerary with:", formData)
    // TODO: Implement itinerary building logic
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url('/hot-air-balloon.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            Build Custom Itinerary
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Create your own personalized travel itinerary
          </p>
        </div>
      </section>

      {/* Traveller Types Section */}
      {homeContent?.travellertypes && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-16">
              {homeContent.typeOfTravellerTitle || "What Type of Traveller Are You?"}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {homeContent.travellertypes.map((traveller: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <Image
                      src={traveller.image}
                      alt={traveller.title}
                      width={120}
                      height={120}
                      className="mx-auto w-28 h-28 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{traveller.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Form Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="destination" className="text-base font-medium text-slate-900 mb-2 block">
                  Destination
                </Label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="Where would you like to go?"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-base font-medium text-slate-900 mb-2 block">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="h-12 text-base"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-base font-medium text-slate-900 mb-2 block">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="travalerTypes" className="text-base font-medium text-slate-900 mb-2 block">
                  Select what type of traveller you are
                </Label>
                <Select
                  value={formData.travalerTypes}
                  onValueChange={(value) => setFormData({ ...formData, travalerTypes: value })}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select what type of traveller you are" />
                  </SelectTrigger>
                  <SelectContent>
                    {homeContent?.travellertypes?.map((traveller: any, index: number) => (
                      <SelectItem
                        key={index}
                        value={traveller.title.toLowerCase().replace(/\s+/g, '-')}
                      >
                        {traveller.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold rounded-lg transition-colors"
              >
                Build itinerary
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tailored to You</h3>
              <p className="text-lg text-gray-700">Plan a trip based on your preferences and style</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexible Options</h3>
              <p className="text-lg text-gray-700">Adjust your itinerary to suit your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
