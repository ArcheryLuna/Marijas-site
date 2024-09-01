import React from 'react';

import { Table, TableRow, TableBody, TableCell, TableHead, TableFooter, TableHeader, TableCaption } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

import { faTicket } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';

export const WhoAmI = () => {
    return (
    <section className="px-6 py-6 lg:py-12 lg:px-12">
        <h1 className="font-display font-bold text-4xl lg:text-6xl">Who Am I</h1>
        <div className="grid grid-cols-1 mt-4 px-6 lg:px-24 lg:mt-8 lg:grid-cols-2 gap-4 lg:gap-6">
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
            </Card>
        </div>
    </section>
    );
};

export const Venues = () => {
    return (
        <section className="px-6 py-6 lg:py-12 lg:px-12">
            <h1 className="font-display font-bold text-4xl lg:text-6xl">Venues</h1>
            <div className='grid grid-cols-1 px-6 lg:px-12 lg:mt-8 lg:grid-cols-4 gap-4 lg:gap-6'>
            <Card className="mt-4 lg:mt-8 col-start-2 col-span-2">
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
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Get Tickets</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Some Place</TableCell>
                                <TableCell>Some City</TableCell>
                                <TableCell>Some Date</TableCell>
                                <TableCell className="flex justify-end">
                                    <Button>
                                        <FontAwesomeIcon icon={faTicket} className="mr-2"/> Get Tickets
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Some Place</TableCell>
                                <TableCell>Some City</TableCell>
                                <TableCell>Some Date</TableCell>
                                <TableCell className="flex justify-end">
                                    <Button>
                                        <FontAwesomeIcon icon={faTicket} className="mr-2"/> Get Tickets
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
            <TableCell>Some Place</TableCell>
            <TableCell>Some City</TableCell>
            <TableCell>Some Date</TableCell>
            <TableCell className="flex justify-end">
                <Button>
                    <FontAwesomeIcon icon={faTicket} className="mr-2"/> Get Tickets
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

export const MainContentHomePage = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-indigo-300/[0.2] h-full bg-grid-indigo-500/[0.2] relative">
        <WhoAmI /> 
        <Venues />
    </div>
  );
};
