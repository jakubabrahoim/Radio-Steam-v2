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
            <section className='relative flex h-screen w-screen items-center justify-center bg-cream-200'>
                <div className='mx-auto flex w-full max-w-6xl  items-center justify-between'>
                    <div className='flex flex-col items-start justify-center gap-10'>
                        <span className='rounded-full border border-fuchsia-900 bg-transparent px-4 py-2 font-semibold text-fuchsia-900'>
                            Stream World&apos;s Music
                        </span>
                        <h1
                            className={`max-w-sm text-start text-6xl font-bold text-fuchsia-900 ${gothic.className}`}
                        >
                            Tune in to the globe
                        </h1>
                        <button
                            onClick={scrollToSection2}
                            className='rounded-full border border-cream-300 bg-cream-100 px-4 py-2 font-semibold text-black transition-transform hover:scale-105 hover:shadow-sm'
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
                    <ChevronDown className='h-10 w-10 animate-bounce text-fuchsia-900' />
                </button>
            </section>

            <section
                ref={section2Ref}
                className='flex h-screen w-screen items-center justify-center bg-cream-100'
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
