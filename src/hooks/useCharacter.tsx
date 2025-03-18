
import { useState, useEffect } from 'react';
import { Character } from '@/types/character';
import { generateRandomCharacter } from '@/lib/characterGenerator';

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  
  // Load character from localStorage on mount
  useEffect(() => {
    const savedCharacter = localStorage.getItem('taleforge-character');
    if (savedCharacter) {
      try {
        setCharacter(JSON.parse(savedCharacter));
      } catch (e) {
        console.error('Failed to parse saved character:', e);
      }
    }
  }, []);
  
  // Save character to localStorage when it changes
  useEffect(() => {
    if (character) {
      localStorage.setItem('taleforge-character', JSON.stringify(character));
    }
  }, [character]);
  
  const generateCharacter = () => {
    const newCharacter = generateRandomCharacter();
    setCharacter(newCharacter);
  };
  
  const resetCharacter = () => {
    setCharacter(null);
    localStorage.removeItem('taleforge-character');
  };
  
  return {
    character,
    generateCharacter,
    resetCharacter
  };
};
