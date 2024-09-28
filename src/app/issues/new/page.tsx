"use client"
// Correct import
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const [error,setError]=useState('');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, description });
        const data: IssueForm = { title, description };
        try {
            // Making API request
            await axios.post("/api/issues", data);
            console.log("Issue submission successful");
            router.push("/issues")
        } catch (error) {
            // Error handling
            if (error instanceof Error) {
                 setError("Error submitting issue:");
                // Optionally, display an error message to the user here
            } else {
                setError("Unknown error occurred");
                // Optionally, display a generic error message to the user
            }
        }
    };
    return (
        <div >
            <h1 className='bg-red-600 capitalize p-3 mb-2 text-gray-900 font-medium rounded-md  w-[400px]' > {error && "unexpected error occured"}</h1> 
            <form onSubmit={handleSubmit} >
                <input
                    className='block mb-2 capitalize p-2 rounded-md border-2 outline-none w-[400px]'
                    type='text'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className='font-semibold block p-2 rounded-md border-2 resize-none outline-none w-[500px] h-[100px]'
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                />
                <button type="submit" className='mt-2 cursor-pointer bg-violet-600'>Submit New Issue</button>
            </form>
        </div>
    );
}

export default NewIssuePage;
