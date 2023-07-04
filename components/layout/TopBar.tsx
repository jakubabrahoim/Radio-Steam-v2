'use client';

import SearchMenu from '@/components/SearchMenu';

export default function TopBar() {
    return (
        <div className='flex h-full w-full items-center justify-between border border-cream-100 p-2'>
            <section>
                <span className='pointer-events-none text-sm font-bold'>
                    Radio Stream
                </span>
            </section>
            <SearchMenu />
        </div>
    );
}
