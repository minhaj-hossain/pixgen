import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { GiLoveHowl } from 'react-icons/gi';
import { PiDownloadSimple } from 'react-icons/pi';
import { RxDividerVertical } from 'react-icons/rx';

const TopGeneration = ({ data }) => {

    // console.log(data)
    return (
        <Card className='rounded-md'>

            <div className='relative h-60 w-full'>
                <Image
                    src={data.imageUrl}
                    alt={data.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='rounded-md'

                />

            </div>


            <h3 className='font-medium text-xl mb-2'>{data.title}</h3>

            <div className='flex justify-between items-center mb-1 '>
                <div className='flex gap-3 items-center'>
                    <GiLoveHowl />
                    <p>{data.likes}</p>
                </div>

                <RxDividerVertical />

                <div className='flex gap-3 items-center'>
                    <PiDownloadSimple />
                    <p>{data.downloads}</p>
                </div>
            </div>

            <Button variant='outline' className={'w-full'}>View</Button>

        </Card>
    );
};

export default TopGeneration;