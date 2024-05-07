"use client"
import { useEffect, useState } from "react";
import CreateTable from "./Tables";

function getData() {
  // Fetch data from your API here.
  return [
      {
          id: "m5gr84i9",
          name: "Favour",
          email: "ken99@yahoo.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-12-08'),
      },
      {
          id: "3u1reuv4",
          name: "Esther",
          email: "Abe45@gmail.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-04-24'),
      },
      {
          id: "derv1ws0",
          name: "Precious",
          email: "Monserrat44@gmail.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-04-24'),
      },
      {
          id: "m5gr84i9",
          name: "Favour",
          email: "ken99@yahoo.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-12-08'),
      },
      {
          id: "m5gr84i9",
          name: "Ethereum",
          email: "Ogunsanya345@hotmail.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-04-24'),
      },
      {
          id: "m5gr84i9",
          name: "Favour",
          email: "ken99@yahoo.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Attended',
          date: new Date('2024-12-08'),
      },
      {
          id: "3u1reuv4",
          name: "Esther",
          email: "Abe45@gmail.com",
          event: "Classroom",
          contact: "09016002817",
          tag: 'Registered',
          date: new Date('2024-04-24'),
      },
  ]
}

function AttendeeCategory() {
  const data = getData();

  const [activeTab, setActiveTab] = useState("Attended");
  const [attended, setAttended] = useState<{ id: string; name: string; email: string; event: string; contact: string; tag: string; date: Date; }[]>([]);
  const [registered, setRegistered] = useState<{ id: string; name: string; email: string; event: string; contact: string; tag: string; date: Date; }[]>([]);

  const openTab = (cityName: string) => {
    setActiveTab(cityName);
  };

  const filterData = () => {
    const attendedData = data.filter(obj => obj.tag === 'Attended');
    const registeredData = data.filter(obj => obj.tag === 'Registered');

    setAttended(attendedData);
    setRegistered(registeredData);
  };

  useEffect(() => {
    filterData();
  }, []);

  useEffect(() => {
    console.log(attended);
    console.log(registered);
  }, [attended, registered]); // Run this effect when attended or registered changes

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex border-b">
        <div
          className={`p-2 cursor-pointer border-b-2 border-transparent   ${
            activeTab === "Attended" ? "border-b-green" : ""
          }`}
          onClick={() => openTab("Attended")}
          style={{ color: activeTab === "Attended" ? "green" : "black", fontWeight: activeTab === "Attended" ? "bold" : "100" }}
        >
          Attended
          <span className=" text-gray-500 text-sm ml-1 py-1 px-2 rounded-lg">
            {attended.length}
          </span>
        </div>

        <div
          className={` p-2 cursor-pointer border-b-2 border-transparent ${
            activeTab === "Registered" ? "border-b-green" : ""
          }`}
          onClick={() => openTab("Registered")}
          style={{ color: activeTab === "Registered" ? "green" : "black", fontWeight: activeTab === "Registered" ? "bold" : "100" }}
        >
          Registered
          <span className=" text-gray-500 text-sm ml-1 py-1 px-2 rounded-lg">
            {registered.length}
          </span>
        </div>
      </div>
      <div
        id="Attended"
        style={{ display: activeTab === "Attended" ? "block" : "none" }}
      >
        <CreateTable data={attended} heading={['name', 'event', 'contact', 'tag', 'date' ]}/>
      </div>

      <div
        id="Registered"
        className="city-content"
        style={{ display: activeTab === "Registered" ? "block" : "none" }}
      >
        <CreateTable data={registered} heading={['Name', 'Email', 'Event', 'Contact', 'Tag', 'Date' ]}/>
      </div>
    </div>
  );
}

export default AttendeeCategory;

