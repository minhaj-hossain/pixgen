"use client";

import { Heart, Sparkles } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { CiMaximize2 } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";

const CardDetails = ({ artItem }) => {
    return (
        <div className="min-h-screen bg-linear-to-b from-neutral-950 to-neutral-900 px-4 md:px-12 py-10 text-black">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* Image */}
                <div className="relative w-full aspect-16/10 shadow-2xl">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src={artItem.imageUrl}
                            alt={artItem.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6">

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">
                            {artItem.title}
                        </h1>
                        <p className="text-sm text-neutral-400 mt-2 flex items-center gap-2">
                            <Sparkles width={18} />
                            Generated with {artItem.model}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
                        <div className="flex items-center gap-2">
                            <Heart size={18} /> {artItem.likes}
                        </div>
                        <div className="flex items-center gap-2">
                            <BiDownload size={18} /> {artItem.downloads}
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarDays size={18} />
                            {new Date(artItem.createdAt).toLocaleDateString()}
                        </div>
                    </div>

                    {/* Prompt */}
                    <Card className="bg-neutral-900 border border-neutral-800">
                        <div className="p-4">
                            <p className="text-sm text-neutral-300 leading-relaxed">
                                {artItem.prompt}
                            </p>
                        </div>
                    </Card>

                    {/* Meta */}
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-neutral-900 border border-neutral-800">
                            <div className="p-4">
                                <p className="text-xs text-neutral-400">Category</p>
                                <p className="font-medium">{artItem.category}</p>
                            </div>
                        </Card>

                        <Card className="bg-neutral-900 border border-neutral-800">
                            <div className="p-4 flex gap-3 items-center">
                                <CiMaximize2 size={18} />
                                <div>
                                    <p className="text-xs text-neutral-400">Resolution</p>
                                    <p className="font-medium">{artItem.resolution}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {artItem.tags.map((tag) => (
                            <Chip key={tag} variant="flat">
                                #{tag}
                            </Chip>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <Button color="primary">Download Image</Button>
                        <Button variant="bordered">Like</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;