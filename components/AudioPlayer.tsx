import { Play, Radio } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export default function AudioPlayer() {
    return (
        <div className='flex h-full w-full items-center justify-between border-t border-cream-100 px-4 py-2'>
            <section className='flex items-center justify-center gap-2'>
                <div className='flex items-center justify-center rounded-lg border border-cream-200 bg-cream-100 p-3'>
                    <Radio className='h-6 w-6' />
                </div>
                Station name
            </section>

            <section>
                <button className='flex items-center justify-center rounded-full bg-fuchsia-900 p-3'>
                    <Play fill='white' className='ml-0.5 h-5 w-5 text-white' />
                </button>
            </section>

            <section className='flex flex-col gap-2 self-start'>
                Volume
                <Slider
                    className='w-52'
                    defaultValue={[50]}
                    max={100}
                    step={1}
                />
            </section>
        </div>
    );
}
