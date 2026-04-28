'use client'

import UpdateProfileModal from '@/components/authPage/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()



    return (
        <div className='container mx-auto'>
            <Card className='max-w-100 mx-auto mt-10 rounded-md'>


                <div className='relative w-10 h-10 mx-auto'>
                    <Avatar>
                        <Avatar.Image alt={session?.user?.name} src={session?.user?.image} />
                        <Avatar.Fallback>MH</Avatar.Fallback>
                    </Avatar>
                </div>

                <h3 className='font-bold text-xl text-center'>
                    {
                        session?.user?.name
                    }
                </h3>

                <div className='flex justify-center'>
                    <UpdateProfileModal />
                </div>
            </Card>

        </div>
    );
};

export default ProfilePage;