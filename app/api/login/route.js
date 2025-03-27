import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    console.log('GET /api/login');
}

/**
 * Commentaire de documentation pour spécifier le type du paramètre "request".
 * @param {NextRequest} request 
 */
export async function POST(request) {
    console.log('POST /api/login');

    // Aller chercher les données dans la requête
    const data = await request.json();
    console.log(data)

    // Retourner une réponse au client
    return NextResponse.json(
        {'allo': 'test'}, 
        { status:400 }
    );
}

export async function PUT() {
    console.log('PUT /api/login');
}

export async function PATCH() {
    console.log('PATCH /api/login');
}

export async function DELETE() {
    console.log('DELETE /api/login');
}