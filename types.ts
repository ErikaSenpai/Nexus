export enum GamePhase {
  MENU = 'MENU',
  SETUP = 'SETUP',
  NAMES = 'NAMES',
  REVEAL = 'REVEAL',
  PLAYING = 'PLAYING',
}

export interface Player {
  id: string;
  name: string;
  role: 'civilian' | 'impostor';
  word?: string; // The secret word (null if impostor and hints off, or seeing hint)
  hint?: string; // The hint provided (if any)
}

export interface GameSettings {
  totalPlayers: number;
  impostorCount: number;
  useHints: boolean;
  category: string;
}

export interface WordData {
  category: string;
  word: string;
  hint: string;
}

export interface CategoryOption {
  id: string;
  name: string;
  icon: string;
  words: { word: string; hint: string }[];
}