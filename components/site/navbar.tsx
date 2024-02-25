"use client"

import { Flame, Github,  Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { ThemeChanger } from '../shared/theme-changer'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Loader } from '../ui/loader'

export default function Navbar() {
    const [open, SetOpen] = useState(false)

    const { isAuthenticated, isLoading } = useConvexAuth();
    const classNav = 'flex items-center justify-center gap-10'
    return (
        <div className='w-full px-5 py-3 '>
            <div className={"max-w-[1440px] mx-auto flex items-center justify-between "}>
                <Link href={'/'} className="flex items-center justify-center gap-5 text-2xl font-bold">
                    <Flame size={28} className='text-primary' /><p><span className='text-primary'>DEPO</span>HUB</p>
                </Link>
                <div className={open ? ' max-md:flex fixed z-50  bg-background w-full h-full left-0 top-0 flex-col px-7 items-center justify-center gap-10' : classNav + ' max-md:hidden'}>
                    <Button variant={'ghost'} onClick={() => SetOpen(!open)} className="max-md:flex hidden absolute top-5 right-5">
                        <X size={28} />
                    </Button>
                    <div className={open ? "flex flex-col gap-10 w-8/12" : classNav}>
                        <a href="">About</a>
                        <a href="">Service</a>
                        <a href="">Featurse</a>
                    </div>
                    <div className={classNav + ' max-md:flex-col max-md:w-8/12'}>


                        <ThemeChanger />
                        {isLoading && <Loader />}
                        {isAuthenticated && !isLoading && (
                            <>
                                <Button variant={"default"} size={"sm"} asChild>
                                    <Link href={"/"}>Dashboard</Link>
                                </Button>
                                <Button className='w-max p-1 ' variant={'outline'}>
                                    <UserButton afterSignOutUrl="/" />
                                </Button>
                            </>
                        )}
                        {!isAuthenticated && !isLoading && (
                            <>

                                <SignInButton mode="modal">
                                    <Button variant={'outline'} className='w-full'>Sign in</Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button variant={'default'} className='w-full'>Sign up</Button>
                                </SignInButton>
                            </>

                        )}


                    </div>
                </div>
                <Button className='hidden max-md:flex' variant={'ghost'} onClick={() => SetOpen(!open)}>
                    <Menu size={28} />
                </Button>
            </div>
        </div>
    )
}
