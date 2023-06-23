'use client';

import MediaIllustration from '@/components/media-illustration';
import { ChevronDown } from 'lucide-react';
import { Dela_Gothic_One } from 'next/font/google';
import { useRef } from 'react';

const gothic = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export default function Home() {
    const section2Ref = useRef<HTMLDivElement>(null);

    const scrollToSection2 = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <section className='relative flex h-screen w-screen items-center justify-center bg-dark-blue-200'>
                <div className='mx-auto flex w-full max-w-6xl  items-center justify-between'>
                    <div className='flex flex-col items-start justify-center gap-10'>
                        <button className='rounded-full border border-gold bg-transparent px-4 py-2 font-semibold text-gold'>
                            Stream World&apos;s Music
                        </button>
                        <h1
                            className={`max-w-sm text-start text-6xl font-bold text-gold ${gothic.className}`}
                        >
                            Tune in to the globe
                        </h1>
                        <button
                            onClick={scrollToSection2}
                            className='rounded-full bg-cream px-4 py-2 font-semibold text-fuchsia'
                        >
                            Discover now
                        </button>
                    </div>
                    <div>
                        <img
                            src='/images/landing-grid.png'
                            alt='landing grid'
                            loading='lazy'
                        />
                    </div>
                </div>

                <button
                    onClick={scrollToSection2}
                    className='absolute inset-x-auto bottom-2'
                >
                    <ChevronDown className='h-10 w-10 animate-bounce text-white' />
                </button>
            </section>

            <section
                ref={section2Ref}
                className='flex h-screen w-screen items-center justify-center bg-white'
            >
                <div className='mx-auto flex w-full max-w-6xl  items-center justify-between'>
                    <h1
                        className={`max-w-2xl text-start text-6xl font-bold ${gothic.className}`}
                    >
                        Explore diverse stations from around the world.
                    </h1>
                    <MediaIllustration />
                </div>
            </section>
        </main>
    );
}
