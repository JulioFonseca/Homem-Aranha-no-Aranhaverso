import { NextResponse } from "next/server";
import data from "./heroes.json";

export default function GET() { 
  return NextResponse.json({ data });
}