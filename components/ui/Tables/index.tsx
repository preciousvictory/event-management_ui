import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import moment from 'moment';

type TableProps = {
    data: Data[],
    heading: string[]
}

export type Data = {
    id: string
    name: string
    email: string
    event: string
    contact: string
    tag: string
    date: Date
}

/**
 * CreateTable component that renders a Table.
 * @param {TableProps} props - The props object containing data which is a list of objects that include id, name, email, event, contact, tag, date, and heading for the table.
 * @returns {JSX.Element} - Table component JSX.
 */
export default function CreateTable({data, heading}: TableProps) {
    console.log(data);
    console.log(heading);    
    if (!heading) return null;

    return (
        <Table>
          {/* <TableCaption>A list of your Registeered/ Attendtees.</TableCaption> */}
          <TableHeader>
            <TableRow>
            {heading.map((head) => (
            <TableHead key={head}>{head}</TableHead>
          ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.event}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.tag}</TableCell>
                <TableCell>{moment(row.date).format('DD/MM/YYYY')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
}
  