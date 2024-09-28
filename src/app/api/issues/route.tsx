import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the schema for creating an issue
const createIssueSchema = z.object({
    title: z.string().min(1,"title is req").max(255),
    description: z.string().min(1,"description is req"),
});

export async function POST(request: NextRequest) {
    // Parse JSON body from the request
    const body = await request.json();

    // Validate the request body
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // Create an issue in the database
    const newIssue = await prisma.issue.create({
        data: {
            title: validation.data.title,
            description: validation.data.description,
            // You can set a default status here or pass it from the request
        },
    });

    return NextResponse.json(newIssue, { status: 201 }); // Respond with the created issue
}
