
import { useState, useEffect, useCallback } from 'react';
import { StoryState, StorySegment } from '@/types/story';
import { storyData } from '@/lib/storyData';

export const useStory = () => {
  const initialState: StoryState = {
    currentSegmentId: 'intro',
    visitedSegments: [],
    inventory: [],
    relationships: {}
  };
  
  const [storyState, setStoryState] = useState<StoryState>(initialState);
  
  // Load story state from localStorage on mount
  useEffect(() => {
    const savedStoryState = localStorage.getItem('taleforge-story');
    if (savedStoryState) {
      try {
        setStoryState(JSON.parse(savedStoryState));
      } catch (e) {
        console.error('Failed to parse saved story state:', e);
      }
    }
  }, []);
  
  // Save story state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('taleforge-story', JSON.stringify(storyState));
  }, [storyState]);
  
  const currentStorySegment = storyData.find(segment => segment.id === storyState.currentSegmentId);
  
  const makeChoice = useCallback((choiceId: string) => {
    if (!currentStorySegment) return;
    
    const choice = currentStorySegment.choices.find(c => c.id === choiceId);
    if (!choice) return;
    
    setStoryState(prevState => ({
      ...prevState,
      currentSegmentId: choice.result,
      visitedSegments: [...prevState.visitedSegments, prevState.currentSegmentId]
    }));
  }, [currentStorySegment]);
  
  const resetStory = useCallback(() => {
    setStoryState(initialState);
    localStorage.removeItem('taleforge-story');
  }, []);
  
  const restart = useCallback(() => {
    setStoryState({
      ...initialState,
      inventory: storyState.inventory, // Keep inventory for new playthrough
    });
  }, [storyState.inventory]);
  
  return {
    storyState,
    currentStorySegment,
    makeChoice,
    resetStory,
    restart
  };
};
