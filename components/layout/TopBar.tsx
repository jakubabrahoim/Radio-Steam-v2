'use client';

import SearchMenu from '@/components/SearchMenu';

export default function TopBar() {
    return (
        <div className='flex h-full w-full items-center justify-end border border-cream-100 p-2'>
            <SearchMenu />
        </div>
    );
}
