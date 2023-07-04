'use client';

import MediaIllustration from '@/components/MediaIllustration';
import { ChevronDown } from 'lucide-react';
import { Dela_Gothic_One } from 'next/font/google';
import Link from 'next/link';
import { useRef } from 'react';

const gothic = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export default function Home() {
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);

    const scrollToSection2 = () => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection3 = () => {
        section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection4 = () => {
        section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <section className='relative flex h-screen w-screen items-center justify-center bg-cream-200 p-6'>
                <div className='absolute top-4 mx-auto flex w-full max-w-6xl items-center justify-end'>
                    <Link
                        href='/app'
                        className='rounded-lg bg-fuchsia-900 px-2 py-1 font-semibold text-white transition-colors hover:bg-fuchsia-800'
                    >
                        Open Radio Stream
                    </Link>
                </div>

                <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8  md:flex-row md:gap-0'>
                    <div className='flex flex-col items-start justify-center gap-10'>
                        <span className='rounded-full border border-fuchsia-900 bg-transparent px-4 py-2 font-semibold text-fuchsia-900'>
                            Stream World&apos;s Music
                        </span>
                        <h1
                            className={`max-w-sm text-start text-6xl font-bold tracking-wide text-fuchsia-900 ${gothic.className}`}
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
                    className='invisible absolute inset-x-auto bottom-2 md:visible'
                >
                    <ChevronDown className='h-10 w-10 animate-bounce text-fuchsia-900' />
                </button>
            </section>

            <section
                ref={section2Ref}
                className='relative flex min-h-screen w-screen items-center justify-center bg-cream-100 p-6'
            >
                <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8  md:flex-row md:gap-0'>
                    <h1
                        className={`max-w-2xl text-start text-4xl font-bold tracking-wide md:text-6xl ${gothic.className}`}
                    >
                        Explore diverse stations from around the world.
                    </h1>
                    <MediaIllustration />
                </div>

                <button
                    onClick={scrollToSection3}
                    className='invisible absolute inset-x-auto bottom-2 md:visible'
                >
                    <ChevronDown className='h-10 w-10 animate-bounce text-fuchsia-900' />
                </button>
            </section>

            <section
                ref={section3Ref}
                className='relative flex min-h-screen w-screen items-center justify-center bg-cream-200 p-6'
            >
                <div className='mx-auto grid w-full max-w-6xl  grid-cols-3 items-center  justify-between gap-6'>
                    <div className='col-span-3 rounded-2xl bg-cream-50 p-8 md:col-span-2'>
                        <h2
                            className={`text-3xl font-bold text-fuchsia-900 ${gothic.className}`}
                        >
                            Likes
                        </h2>
                        <span>Save your favorite stations</span>
                        <img
                            className='mt-5 h-60 w-full rounded-lg object-cover grayscale'
                            src='/images/landing-likes.png'
                            alt='likes'
                        />
                    </div>
                    <div className='col-span-3 rounded-2xl bg-cream-50 p-8 md:col-span-1'>
                        <h2
                            className={`text-3xl font-bold text-fuchsia-900 ${gothic.className}`}
                        >
                            Search
                        </h2>
                        <span>Find stations easily</span>
                        <img
                            className='mt-5 h-60 w-full rounded-lg object-cover grayscale'
                            src='/images/landing-search.png'
                            alt='search'
                        />
                    </div>
                    <div className='col-span-3 rounded-2xl bg-cream-50 p-8 md:col-span-1'>
                        <h2
                            className={`text-3xl font-bold text-fuchsia-900 ${gothic.className}`}
                        >
                            Categories
                        </h2>
                        <span>Browse by genre</span>
                        <img
                            className='mt-5 h-60 w-full rounded-lg object-cover grayscale'
                            src='/images/landing-categories.png'
                            alt='categories'
                        />
                    </div>
                    <div className='col-span-3 rounded-2xl bg-cream-50 p-8 md:col-span-2'>
                        <h2
                            className={`text-3xl font-bold text-fuchsia-900 ${gothic.className}`}
                        >
                            Countries
                        </h2>
                        <span>Discover radio stations worldwide</span>
                        <img
                            className='mt-5 h-60 w-full rounded-lg object-cover grayscale'
                            src='/images/landing-countries.png'
                            alt='countries'
                        />
                    </div>
                </div>

                <button
                    onClick={scrollToSection4}
                    className='invisible absolute inset-x-auto bottom-2 md:visible'
                >
                    <ChevronDown className='h-10 w-10 animate-bounce text-fuchsia-900' />
                </button>
            </section>

            <section
                ref={section4Ref}
                className='relative flex min-h-screen w-screen items-center justify-center bg-cream-100 px-6 py-20'
            >
                <div className='mx-auto flex w-full max-w-6xl flex-col gap-10'>
                    <div className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
                        <div className='flex flex-col gap-4'>
                            <h1
                                className={`max-w-md text-3xl tracking-wide ${gothic.className}`}
                            >
                                All your favorites, just a click away
                            </h1>
                            <p className='max-w-md'>
                                Stream World&apos;s Music offers quick and
                                convenient access to your favorite radio
                                stations. Connect with a global community of
                                music lovers and discover new, exciting stations
                                from around the world.
                            </p>
                        </div>
                        <img
                            className='h-[500px] w-[500px]  rounded-2xl object-cover grayscale'
                            src='/images/landing-section3.1.png'
                            alt='section3'
                        />
                    </div>

                    <div className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
                        <img
                            className='h-[500px] w-[500px]  rounded-2xl object-cover grayscale'
                            src='/images/landing-section3.2.png'
                            alt='section3'
                        />
                        <div className='flex flex-col gap-4'>
                            <h1
                                className={`max-w-md text-3xl tracking-wide ${gothic.className}`}
                            >
                                Personalized for your unique taste
                            </h1>
                            <p className='max-w-md'>
                                We know you&apos;re unique, and we&apos;ve got
                                you covered! Our website learns your preferences
                                and customizes the selection just for you! Be
                                prepared to expand your musical horizons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='flex h-24 w-full items-center justify-center bg-fuchsia-900 p-6 text-lg font-semibold tracking-widest text-white'>
                &copy; Radio Stream {getCurrentYear()}
            </footer>
        </main>
    );
}
