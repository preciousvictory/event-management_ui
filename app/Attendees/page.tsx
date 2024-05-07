import Category from "@/components/ui/CategoryTableData";
import { useEffect, useState } from "react";

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

export default function Attendees() {
    const data = getData();

    const [attended, setAttended] = useState<{ id: string; name: string; email: string; event: string; contact: string; tag: string; date: Date; }[]>([]);
    const [registered, setRegistered] = useState<{ id: string; name: string; email: string; event: string; contact: string; tag: string; date: Date; }[]>([]);
    const [cancelled, setCancelled] = useState<{ id: string; name: string; email: string; event: string; contact: string; tag: string; date: Date; }[]>([]);
    

    const filterData = () => {
        const attendedData = data.filter(obj => obj.tag === 'Attended');
        const registeredData = data.filter(obj => obj.tag === 'Registered');
        const cancelledData = data.filter(obj => obj.tag === 'cancelled');

        setAttended(attendedData);
        setRegistered(registeredData);
        setCancelled(cancelledData);
    };

    useEffect(() => {
        filterData();
    }, []);

    const tabs = [
        { name: 'Attended', data: attended },
        { name: 'Registered', data: registered },
        { name: 'Cancelled', data: cancelled }
    ];


    return (
        <Category tabs={tabs} />
    )
}