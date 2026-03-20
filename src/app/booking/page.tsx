import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token);
    var createAt = new Date(profile.data.createdAt);

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl">New Booking</div>
            <div>
                <div className='text-2xl'>{profile.data.name}</div>
                <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td>Tel.</td>
                            <td>{profile.data.tel}</td>
                        </tr>
                        <tr>
                            <td>Member Since</td>
                            <td>{profile.data.createdAt}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <TextField name = "Name-Lastname" label="Name-Lastname" variant="standard" />
                <TextField name = "Contact-Number" label="Contact-Number" variant="standard" />
            </div>
            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <Select variant="standard" id = "venue" className="h-[2em] w-[200px]">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </div>
            <div>
                <DateReserve/>
            </div>
            
            <button className="w-[100px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
            name = "Book Venue">
                Book Venue
            </button>
        </main>
    );
}