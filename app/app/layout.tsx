import AudioPlayer from '@/components/AudioPlayer';
import LeftSidebar from '@/components/layout/LeftSidebar';
import TopBar from '@/components/layout/TopBar';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='grid-container'>
                    <div className='top-bar'>
                        <TopBar />
                    </div>
                    <div className='left-sidebar'>
                        <LeftSidebar />
                    </div>
                    <div className='main-content'>{children}</div>
                    <div className='bottom-bar'>
                        <AudioPlayer />
                    </div>
                </div>
            </body>
        </html>
    );
}
