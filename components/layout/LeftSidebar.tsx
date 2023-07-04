import {
    Clock,
    RadioReceiver,
    Flag,
    Star,
    User,
    ListMusic,
    Plus,
} from 'lucide-react';
import { Dela_Gothic_One } from 'next/font/google';

const gothic = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export default function LeftSidebar() {
    return (
        <div className='flex h-full w-full flex-col gap-12 border-r border-cream-100 bg-white p-2'>
            <section className='flex w-full flex-col items-start justify-center gap-2'>
                <span
                    className={`px-2 py-1 text-lg !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Browse
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <Clock className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Recent
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <RadioReceiver className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Stations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <Flag className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Countries
                </span>
            </section>

            <section className='flex w-full flex-col items-start justify-center gap-2'>
                <span
                    className={`px-2 py-1 text-lg !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Library
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <Star className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Favorite stations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <User className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Recommendations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlists
                </span>
            </section>

            <section className='flex w-full flex-col items-start justify-center gap-2'>
                <span
                    className={`flex w-full items-center justify-between px-2 py-1 text-lg !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Playlists
                    <button className='rounded-lg p-1 hover:bg-gray-100'>
                        <Plus className='h-5 w-5' />
                    </button>
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 1
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 2
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 3
                </span>
            </section>
        </div>
    );
}
