import { connectDB } from "@/lib/connectDB"
import { Post } from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    const {slug} = params;
    try {
        connectDB();
        const post = await Post.findOne({slug});
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        throw new Error("faild to fetch post")
    }
}

export const DELETE = async (req,{params}) => {
    const {slug} = params;
    try {
        connectDB();
        await Post.deleteOne({slug});
        return NextResponse.json("post deleted")
    } catch (error) {
        console.log(error)
        throw new Error("faild to delete post")
    }
}
