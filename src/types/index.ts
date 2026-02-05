export type TitleType = 'movie' | 'series';

export interface Title {
    id: string;
    name: string;
    type: TitleType;
    genres: string[];
    year: number;
    maturityRating: string;
    duration: string;
    description: string;
    cast: string[];
    thumbnail: string; // Vertical poster
    backdrop?: string; // Horizontal hero image
    featured?: boolean;
    trendingScore: number;
}

export interface Episode {
    id: string;
    titleId: string;
    season: number;
    episodeNumber: number;
    name: string;
    duration: string;
    synopsis: string;
}

export type UserRole = 'user' | 'admin';

export interface UserProfile {
    id: string;
    name: string;
    avatar: string;
    isKids: boolean;
}

export interface User {
    id: string;
    email: string;
    role: UserRole;
    profiles: UserProfile[];
}

export interface Notification {
    id: string;
    title: string;
    body: string;
    type: 'new_release' | 'recommendation' | 'account';
    createdAt: string;
    read: boolean;
}

export interface Settings {
    autoplay: boolean;
    language: string;
    subtitles: string;
    parentalPIN?: string;
}
