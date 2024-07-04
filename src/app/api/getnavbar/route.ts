import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const response = await prisma.navbarcontent.findMany();
        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 501 });
    }
}
