'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function() {
    return (
        <div className = "bg-stale-100 round-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center" >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
        </div>
    );
}