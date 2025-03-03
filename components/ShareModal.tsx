"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Mail, Link, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareModalProps {
    title: string;
    url: string;
}

export function ShareModal({ title, url }: ShareModalProps) {
    const [copied, setCopied] = useState(false);

    const shareOptions = [
        {
            name: "Twitter",
            icon: Twitter,
            color: "bg-[#1DA1F2] hover:bg-[#1a94df]",
            textColor: "text-white",
            onClick: () => {
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
                    "_blank"
                );
            },
        },
        {
            name: "Facebook",
            icon: Facebook,
            color: "bg-[#1877F2] hover:bg-[#166fe5]",
            textColor: "text-white",
            onClick: () => {
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                    "_blank"
                );
            },
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            color: "bg-[#0A66C2] hover:bg-[#0958a8]",
            textColor: "text-white",
            onClick: () => {
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                    "_blank"
                );
            },
        },
        {
            name: "Email",
            icon: Mail,
            color: "bg-gray-600 hover:bg-gray-700",
            textColor: "text-white",
            onClick: () => {
                window.open(
                    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`,
                    "_blank"
                );
            },
        },
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            toast({
                title: "Link copied to clipboard",
                description: "You can now paste it anywhere",
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast({
                title: "Failed to copy",
                description: "Please try again",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share this article</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        {shareOptions.map((option) => (
                            <Button
                                key={option.name}
                                onClick={option.onClick}
                                className={`${option.color} ${option.textColor} w-full`}
                            >
                                <option.icon className="mr-2 h-4 w-4" />
                                {option.name}
                            </Button>
                        ))}
                    </div>

                    <div className="relative mt-2">
                        <div className="flex items-center">
                            <input
                                type="text"
                                readOnly
                                value={url}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-10 w-10"
                                onClick={copyToClipboard}
                            >
                                {copied ? (
                                    <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
                <DialogClose asChild>
                    <Button variant="outline" className="w-full">Close</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
} 