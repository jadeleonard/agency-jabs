import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();




interface Props {
    id: string;
    name: string;
    lastname: string;
    age: number;
    address: string;
    job: string;
    education: string;
    experience: string;
    specialskills: string;
    sss: string;
    pagibig: string;
    tin: string;
    philhealh: string;
    picture: string;
    twitter: string;
}

export async function POST(request: NextRequest) {
    const props: Props = await request.json();

    try {
        const response = await prisma.employeedata.create({
            data: {
                id: props.id,
                name: props.name,
                lastname: props.lastname,
                age: props.age,
                address: props.address,
                job: props.job,
                education: props.education,
                experience: props.experience,
                specialskills: props.specialskills,
                sss: props.sss,
                pagibig: props.pagibig,
                tin: props.tin,
                philhealh: props.philhealh,
                picture: props.picture,
                twitter: props.twitter
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: "An error occurred while creating the employee data." }, { status: 500 });
    }
}
