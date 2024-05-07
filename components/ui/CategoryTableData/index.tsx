"use client"
import { useState } from "react";
import CreateTable from "../Tables";

type CategoryProps = {
  // getData?: Function,
  tabs: Data[]
}

// type Data = {
//   name: string;
//   data: {
//     id: string;
//     name: string;
//     email: string;
//     event: string;
//     contact: string;
//     tag: string;
//     date: Date;
//   }
// }

type Data = {
  name: string;
  data: any[]
}

/**
 * Category component that renders a section like tab that renders different view depending on the tab clicked on.
 * @param {CategoryProps} props - The props object containing getData, .
 * @returns {JSX.Element} - Category component JSX.
 */
export default function Category({ tabs }: CategoryProps) {
  const defaultTab = tabs[0].name
  const [activeTab, setActiveTab] = useState(defaultTab);


  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <div
            className={`p-2 cursor-pointer border-b-2 border-transparent   ${activeTab === "Attended" ? "border-b-green" : ""
              }`}
            key={index}
            onClick={() => openTab(tab.name)}
            style={{ color: activeTab === tab.name ? "green" : "black", fontWeight: activeTab === tab.name ? "bold" : "100" }}
          >
            {tab.name}
            <span className=" text-gray-500 text-sm ml-1 py-1 px-2 rounded-lg">
              {tab.data.length}
            </span>
          </div>
        ))}

        {tabs.map((tab) => (
          <div
            id={tab.name}
            style={{ display: activeTab === tab.name ? "block" : "none" }}
          >
            <CreateTable data={tab.data} heading={Object.keys(tab.data)} />
          </div>

        ))}
      </div>
    </div>
  );
}