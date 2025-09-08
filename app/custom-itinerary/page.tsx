"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Settings } from "lucide-react"
import { useState } from "react"

export default function CustomItinerary() {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    interests: "",
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
            backgroundImage: `url('/hot-air-balloon-over-scenic-mountain-landscape-adv.jpg')`,
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
                <Label htmlFor="interests" className="text-base font-medium text-slate-900 mb-2 block">
                  Interests
                </Label>
                <Select
                  value={formData.interests}
                  onValueChange={(value) => setFormData({ ...formData, interests: value })}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your interests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure & Outdoor</SelectItem>
                    <SelectItem value="culture">Culture & History</SelectItem>
                    <SelectItem value="nature">Nature & Wildlife</SelectItem>
                    <SelectItem value="food">Food & Culinary</SelectItem>
                    <SelectItem value="relaxation">Relaxation & Wellness</SelectItem>
                    <SelectItem value="nightlife">Nightlife & Entertainment</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="family">Family Friendly</SelectItem>
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
