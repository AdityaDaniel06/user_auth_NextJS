import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // compare passwords
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    //  generate and send JWT token
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // setting jwt in user's cookie
    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });

    return response;
    response.cookies.set("token", token, {
      httpOnly: true,
    });
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      json: { message: "Internal Server Error" },
    };
  }
}
