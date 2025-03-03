"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Code } from "lucide-react";

interface GitHubStatsProps {
    owner: string;
    repo: string;
    defaultStats: {
        stars: string;
        forks: string;
        license: string;
    };
}

export default function GitHubStats({ owner, repo, defaultStats }: GitHubStatsProps) {
    const [stats, setStats] = useState(defaultStats);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const response = await fetch(`/api/github-stats?owner=${owner}&repo=${repo}`);
                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        stars: data.stars.toLocaleString(),
                        forks: data.forks.toLocaleString(),
                        license: data.license || defaultStats.license
                    });
                }
            } catch (error) {
                console.error("Error fetching GitHub stats:", error);
            } finally {
                setIsLoaded(true);
            }
        };

        fetchGitHubStats();
    }, [owner, repo, defaultStats]);

    return (
        <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{stats.stars} stars</span>
            </div>
            <div className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                <span>{stats.forks} forks</span>
            </div>
            <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>{stats.license}</span>
            </div>
        </div>
    );
} 