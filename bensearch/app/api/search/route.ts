import { NextResponse } from 'next/server';
import { search } from '@/lib/search';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || "";
    
    return NextResponse.json(search(q));
}