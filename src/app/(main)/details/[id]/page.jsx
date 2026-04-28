
import CardDetails from '@/components/detailsPage/CardDetails';
import { getData } from '@/lib/dataFetching/getData';
import { Heart, Sparkles } from '@gravity-ui/icons';
import { Button, Card, Chip, Tag } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { CiMaximize2 } from 'react-icons/ci';
import { FaCalendarDays } from 'react-icons/fa6';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const data = await getData()
    const artItem = data.find(d => d.id == id)

    // console.log(myData)

    return (

        <CardDetails artItem={artItem} />



    );
}

export default DetailsPage;