import { Clock, Flag, Star, User, ListMusic, Plus, Radio } from 'lucide-react';
import { Dela_Gothic_One } from 'next/font/google';

const gothic = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export default function LeftSidebar() {
    return (
        <div className='flex h-full w-full flex-col gap-6 border-r border-cream-100 bg-white px-2 py-4'>
            <section className='flex w-full flex-col items-start justify-center gap-1'>
                <span
                    className={`px-2 py-1 !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Browse
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <Clock className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Recent
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <Radio className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Stations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <Flag className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Countries
                </span>
            </section>

            <section className='flex w-full flex-col items-start justify-center gap-1'>
                <span
                    className={`px-2 py-1 !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Library
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <Star className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Favorite stations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <User className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Recommendations
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlists
                </span>
            </section>

            <section className='flex w-full flex-col items-start justify-center gap-1'>
                <span
                    className={`flex w-full items-center justify-between px-2 py-1 !font-bold text-fuchsia-900 ${gothic.className}`}
                >
                    Playlists
                    <button className='rounded-lg p-1 hover:bg-gray-100'>
                        <Plus className='h-5 w-5' />
                    </button>
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 1
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 2
                </span>
                <span className='group flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100'>
                    <ListMusic className='h-4 w-4 transition-colors group-hover:text-fuchsia-900' />
                    Playlist 3
                </span>
            </section>
        </div>
    );
}
