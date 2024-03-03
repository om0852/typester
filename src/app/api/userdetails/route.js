import dbconnect from "@/database/db/db";
import User from "@/database/model/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await dbconnect();
        const body = await req.json();
        const { id } = body;
        const userdata = await User.findOne({ _id: id });
        return NextResponse.json(
            {
                status: 302,
                message: userdata
            }
        );

    }
    catch (error) {
        return NextResponse.json(
            {
                status: 400,
                message: error.message
            }
        );
    }
}