
import Link from 'next/link'

function Pak(){
    return(
        <div className="justify-center text-center bg-blue-600 h-screen content-center">
        <p className='flex justify-center text-5xl font-extrabold mt-8 ms-10 p-2'><h1>SELECT YOUR PROVINCE</h1></p>
        <ul className='flex justify-center text-5xl font-bold mt-8 ms-10 p-6'>
            <li className='p-2'> <Link href="/pakistan/sindh">Sindh</Link></li>
            <li className='p-2'> <Link href="/pakistan/punjab">Punjab</Link></li>
            <li className='p-2'> <Link href="/pakistan/bolochistan">Bolochistan</Link></li>
            <li className='p-2'> <Link href="/pakistan/kpk">Kpk</Link></li>
            
        </ul>
        </div>
    )
}
export default Pak