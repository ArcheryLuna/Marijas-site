import React from 'react';

import { Table, TableRow, TableBody, TableCell, TableHead, TableFooter, TableHeader, TableCaption } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

import { faTicket, faArrowUpRight, faCoffee } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const WhoAmI = () => {
    return (
    <section id="who-am-i" className="px-6 py-6 lg:py-12 lg:px-12">
        <h1 className="font-display font-bold text-4xl lg:text-6xl text-center">Who Am I</h1>
        <div className="lg:grid grid-cols-6 ">
        <div className="col-start-2 col-span-4 grid grid-cols-1 mt-4 px-6 lg:px-24 lg:mt-8 lg:grid-cols-2 gap-4 lg:gap-6">
            <Image src="/home/who-am-i.jpeg" alt="Marija Who Am I" width={200} height={200} />
            <Card>
                <CardHeader>
                    <CardTitle>I am lifeonmarsindica</CardTitle>
                    <CardDescription>
                        I am a musician.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit diam ut elit euismod, sit amet facilisis risus ullamcorper. Curabitur venenatis neque eget tempus laoreet. Vivamus vulputate, dui eu volutpat feugiat, nibh lacus feugiat odio, eget mattis sapien felis in mi. Proin non arcu lectus. Integer pharetra sit amet sem sit amet scelerisque. Nam in commodo ipsum. Vestibulum finibus convallis tincidunt. Nulla facilisi. In dapibus eros leo, sed luctus nulla egestas sit amet. Donec finibus magna sit amet nulla pulvinar, a lobortis velit commodo. Duis ultrices neque et sem maximus fermentum. Integer mollis tincidunt nunc, in luctus felis cursus at. Vivamus pharetra mauris sit amet ipsum rutrum, sit amet mattis massa blandit.
                </CardContent>
                <CardFooter>
                    <Link href="/about">
                        <Button>
                            Learn More <FontAwesomeIcon icon={faArrowUpRight} className="ml-2 text-lg mb-0.5" />
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
        </div>
    </section>
    );
};

export const Venues = () => {
    return (
        <section id="venues" className="px-6 py-6 lg:py-12 lg:px-12">
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-center">Where can you find me?</h1>
            <div className='lg:grid grid-cols-4 gap-4 lg:gap-6'>
            <Card className="mt-4 lg:mt-8 px-2 lg:px-4 col-start-2 col-span-2">
                <CardHeader>
                    <CardTitle>Places im going to be starring at</CardTitle>
                    <CardDescription>
                        Where will i be???
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>Where will I be?</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Venue Name</TableHead>
                                <TableHead>City, State</TableHead>
                                <TableHead>Date <span className="text-neutral-400 dark:text-neutral-600">(MM/DD/YYYY)</span></TableHead>
                                <TableHead className="text-right">Get Tickets</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>O2 Arena</TableCell>
                                <TableCell>London, United Kingdom</TableCell>
                                <TableCell>05/12/2024</TableCell>
                                <TableCell className="flex justify-end">
                                    <Button>
                                        <FontAwesomeIcon icon={faTicket} className="mr-2 mb-0.5"/> Get Tickets
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hollywood Bowl</TableCell>
                                <TableCell>Los Angeles, CA</TableCell>
                                <TableCell>06/17/2025</TableCell>
                                <TableCell className="flex justify-end">
                                    <Button>
                                        <FontAwesomeIcon icon={faTicket} className="mr-2 mb-0.5"/> Get Tickets
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Madison Square Garden</TableCell>
                                <TableCell>New York City, NY</TableCell>
                                <TableCell>09/27/2025</TableCell>
                                <TableCell className="flex justify-end">
                                    <Button>
                                        <FontAwesomeIcon icon={faTicket} className="mr-2 mb-0.5"/> Get Tickets
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </CardContent>
            </Card>
            </div>
        </section>
    );
}

export const BuyMeACoffee = () => {
    return (
    <section id="buy-me-a-coffee" className="px-6 py-6 lg:py-12 lg:px-12">
        <h1 className="font-display font-bold py-4 lg:py-8 text-4xl lg:text-6xl text-center">Buy Me A Coffee</h1>
        <div className="lg:grid grid-cols-4 ">
            <Card className="col-span-2 col-start-2">
                <CardHeader>
                    <CardTitle>Show me some love</CardTitle>
                    <CardDescription>
                        Consider supporting me by donating.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center">
                        If you like my music, consider supporting me by buying me a coffee. Your support helps me keep creating music.
                    </p>
                    <div className="flex justify-center mt-4">
                        <Button>
                            <FontAwesomeIcon icon={faCoffee} className="mr-2 mb-0.5"/> Buy Me A Coffee
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
    )
}

export const MainContentHomePage = () => {
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-dot-indigo-300/[0.2] h-full bg-grid-indigo-500/[0.2] relative">
        <WhoAmI /> 
        <Venues />
        <BuyMeACoffee />
    </div>
  );
};
