"use client"
// Correct import
import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router =useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, description });
         const data : IssueForm={title,description};
         try {
            // Making API request
            await axios.post("/api/issues", data);
            console.log("Issue submission successful");
            router.push("/issues")
        } catch (error) {
            // Error handling
            if (error instanceof Error) {
                console.error("Error submitting issue:", error.message);
                // Optionally, display an error message to the user here
            } else {
                console.error("Unknown error occurred");
                // Optionally, display a generic error message to the user
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} >
            <input
                className='block mb-2 capitalize p-2 rounded-md border-2 outline-none w-[400px]'
                type='text'
                placeholder='Title'
                onChange={(e)=>setTitle(e.target.value)}
            />
            <textarea
                className='font-semibold block p-2 rounded-md border-2 resize-none outline-none w-[500px] h-[100px]'
                onChange={(e)=>setDescription(e.target.value)}
                placeholder='Description'
            />
            <Button type="submit" className='mt-2 cursor-pointer bg-violet-600'>Submit New Issue</Button>
        </form>
    );
}

export default NewIssuePage;
