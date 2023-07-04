import { useEffect, useState } from 'react';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

export default function SearchMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && e.metaKey) {
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className='flex w-52 items-end justify-between rounded-md border border-cream-200 px-2 py-1 text-sm'
            >
                Search...
                <kbd className='bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100'>
                    <span className='text-xs'>⌘</span>K
                </kbd>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Search for radio stations, countries or your playlists...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Countries'>
                        <CommandItem>Slovakia</CommandItem>
                        <CommandItem>Czech Republic</CommandItem>
                    </CommandGroup>
                    <CommandGroup heading='Stations'>
                        <CommandItem>Sham FM</CommandItem>
                        <CommandItem>Ninar FM</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
