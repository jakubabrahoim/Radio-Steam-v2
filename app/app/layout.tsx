import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='grid-container'>
                    <div className=' top-bar bg-fuchsia-950'>nav</div>
                    <div className='left-sidebar bg-fuchsia-200'>
                        left sidebar
                    </div>
                    <div className='main-content bg-fuchsia-500'>
                        {children}
                    </div>
                    <div className='bottom-bar bg-white'>Audio player</div>
                </div>
            </body>
        </html>
    );
}
