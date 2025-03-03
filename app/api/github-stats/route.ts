import { NextResponse } from 'next/server';

// Cache the response for 1 hour
export const revalidate = 3600;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');

    if (!owner || !repo) {
        return NextResponse.json(
            { error: 'Owner and repo parameters are required' },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                // Add GitHub token if available in environment variables
                ...(process.env.GITHUB_TOKEN && {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`
                })
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch GitHub stats' },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json({
            stars: data.stargazers_count,
            forks: data.forks_count,
            license: data.license?.name || 'Unknown',
        });
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub stats' },
            { status: 500 }
        );
    }
} 