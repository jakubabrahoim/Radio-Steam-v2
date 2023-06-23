import MediaIllustration from '@/components/media-illustration';
import { Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';

const gothic = Dela_Gothic_One({ weight: '400', subsets: ['latin'] });

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center'>
            <section className='flex h-screen w-screen items-center justify-center bg-dark-blue-200'>
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
                        <button className='rounded-full bg-cream px-4 py-2 font-semibold text-fuchsia'>
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
            </section>

            <section className='flex h-screen w-screen items-center justify-center bg-white'>
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
