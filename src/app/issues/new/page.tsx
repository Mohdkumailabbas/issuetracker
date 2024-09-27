
import { Button } from '@radix-ui/themes'
import React from 'react'
const NewIssuePage = () => {
    return (
        <div>
            <input className='block mb-2 capitalize p-2 rounded-md border-2 outline-none w-[400px]' type='text' placeholder='title'></input>
            <textarea
                className=' block p-2 rounded-md border-2 resize-none outline-none w-[500px] h-[100px]'
                placeholder='Description'
            />
            <Button className='mt-2'>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage