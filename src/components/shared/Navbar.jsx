"use client";
import Image from "next/image";
import Link from "next/link";
import navLogo from '@/assets/logo.png'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {

    const signOutHandler = async () => {
        await authClient.signOut();

    }

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()



    // console.log(session?.user)

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={navLogo}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-photos"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    <ul className="flex items-center  text-sm gap-4">
                        {
                            !session?.user ? <ul className="flex items-center  text-sm gap-4">
                                <li><Button variant="outline">

                                    <Link href={"/signup"}>SignUp</Link>
                                </Button>
                                </li>
                                <li>
                                    <Button variant="outline">
                                        <Link href={"/signin"}>SignIn</Link>
                                    </Button>
                                </li>
                            </ul> : <ul className="flex items-center gap-2">

                                <li><Link href={'/profile'}>
                                    <Avatar>
                                        <Avatar.Image alt={session?.user?.name} src={session?.user?.image} />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                </Link>
                                </li>
                                <li>
                                    <Button variant="danger-soft"
                                        className="cursor-pointer"
                                        onClick={signOutHandler}>SignOut</Button>
                                </li>
                            </ul>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;