import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDuration(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export function getMyList(): string[] {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        const saved = localStorage.getItem(`myList_${userData.id}`);
        return saved ? JSON.parse(saved) : [];
    }
    const guest = localStorage.getItem('guestList');
    return guest ? JSON.parse(guest) : [];
}

export function toggleMyList(id: string): void {
    const user = localStorage.getItem('user');
    const key = user ? `myList_${JSON.parse(user).id}` : 'guestList';
    const saved = localStorage.getItem(key);
    let list = saved ? JSON.parse(saved) : [];

    if (list.includes(id)) {
        list = list.filter((item: string) => item !== id);
    } else {
        list.push(id);
    }

    localStorage.setItem(key, JSON.stringify(list));
}
