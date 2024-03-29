import dbconnect from "@/database/db/db";
import User from "@/database/model/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { method, email, password, userName } = body;
        console.log(body)
        if (method == 1) {
            //checking there is already a user or not
            const Userdata = await User.findOne({ email });
            console.log(Userdata)
            if (!Userdata) {
                //if user not exist create a new account
                const NewUser = await User.create({ email, userName, password })
                return NextResponse.json(
                    {
                        status: 201,
                        message: "Account Created Successfully",
                        data: NewUser
                    }
                );
            }
            else {
                // if account already exist return this message
                return NextResponse.json(
                    {
                        status: 302,
                        message: "Account with this email already exist"
                    }
                );
            }
        }
        else {
            //login code 
            //checking there is account exist or not

            const UserData = await User.findOne({ email });
            if (UserData) {
                //if account exist check password
                if (password == UserData.password) {
                    return NextResponse.json(
                        { status: 200, message: "Login Successfully", data: UserData }
                    );
                }
                else {
                    return NextResponse.json(
                        { status: 401, message: "Invalid Password", data: UserData }
                    );
                }
            }
            else {
                return NextResponse.json(
                    { status: 404, message: "Account Doesn't Exist With This Emails", Data: UserData }
                );
            }
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json(
            { status: 400, message: error.message }
        );
    }

}
dbconnect()