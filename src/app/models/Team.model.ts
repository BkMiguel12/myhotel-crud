export interface Team {
    id: number;
    name: string;
    status: 'pass' | 'playing' | 'eliminated';
    created_at: string;
    players: string[];
}