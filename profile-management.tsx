"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Search,
  Bell,
  Home,
  Clock,
  FileText,
  ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  Pencil,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileManagement() {
  const [activeTab, setActiveTab] = useState("edit")
  const [formData, setFormData] = useState({
    yourName: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "",
    dateOfBirth: "25 January 1990",
    address: "San Jose, California, USA",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your backend API call here
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-16 flex flex-col items-center py-6 border-r bg-white">
        <div className=" text-3xl w-30 h-10 rounded-md flex items-center justify-center text-fuchsia-900 font-bold mb-10">
          A
        </div>
        <div className="flex flex-col items-center gap-8 mt-8">
          {[Home, Clock, FileText, ImageIcon].map((Icon, idx) => (
            <button key={idx} className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-purple-500">
              <Icon size={20} />
            </button>
          ))}
          <button className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-md text-purple-500">
            <Settings size={20} />
          </button>
        </div>
        <div className="mt-auto">
          <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-purple-500">
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-semibold">Profile Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input placeholder="Search" className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-none rounded-full" />
            </div>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="h-10 w-10">
              <AvatarImage src="45454.png" alt="User" />
              <AvatarFallback>CR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white rounded-lg p-8">
            {/* Tabs */}
            <div className="flex border-b mb-8">
              {["edit", "bank", "security"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 px-4 font-medium ${
                    activeTab === tab ? "text-purple-900 border-b-2 border-purple-500" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "edit" && "Edit Profile"}
                  {tab === "bank" && "Bank Details"}
                  {tab === "security" && "Security"}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex">
                {/* Profile Picture */}
                <div className="mr-12">
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                      <img
                        src="/1111.jpeg?height=144&width=200"
                        alt="Profile"
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 w-8 h-8 bg-fuchsia-900 rounded-full flex items-center justify-center text-white"
                    >
                      <Pencil size={16} />
                    </button>
                  </div>
                </div>

                {/* Fields */}
                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleChange}
                      className="bg-purple-100 border-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">User Name</label>
                    <Input
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      className="bg-purple-100 border-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-purple-100 border-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="••••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-purple-100 border-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth</label>
                    <div className="relative">
                      <Input
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="bg-purple-100 border-none pr-10"
                      />
                      <ChevronDown
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={16}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Present Address</label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-purple-100 border-none"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-12">
                <Button type="submit" className="bg-fuchsia-900 hover:bg-purple-600 text-white px-8 w-44">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
