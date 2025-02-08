import { NextResponse } from "next/server";

const SHEET_URL = process.env.VISIT_COUNT_SCRIPT_URL;

export async function GET() {
    try {
        const response = await fetch(`${SHEET_URL}?action=get`);
        const data = await response.json();
        // console.log({ count: data.count });
        return NextResponse.json({
            "count": data.count,
            "status": "Success"
        },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to fetch visit count:', error);
        return NextResponse.json({
            "message": "Failed to fetch visit count",
            "error": error
        },
            { status: 501 }
        );
    }
};

export async function POST() {
    try {
        const response = await fetch(`${SHEET_URL}?action=increment`, { method: 'POST' });
        const data = await response.json();
        // console.log({ count: data.count });
        return NextResponse.json({
            "count": data.count,
            "status": "Success"
        },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to update visit count:', error);
        return NextResponse.json({
            "message": "Failed to update visit count",
            "error": error
        },
            { status: 501 }
        );
    }
};