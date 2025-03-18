
import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, BookOpenIcon } from 'lucide-react';
import { useCharacter } from '@/hooks/useCharacter';
import { useStory } from '@/hooks/useStory';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import CharacterGenerator from '@/components/CharacterGenerator';
import StoryAdventure from '@/components/StoryAdventure';
import HubHome from '@/components/HubHome';

enum AppView {
  HOME = 'home',
  CHARACTER = 'character',
  STORY = 'story'
}

const Index = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const { character, generateCharacter, resetCharacter } = useCharacter();
  const { storyState, resetStory } = useStory();
  
  // Check local storage for saved state on component mount
  useEffect(() => {
    const savedView = localStorage.getItem('taleforge-view');
    if (savedView) {
      setCurrentView(savedView as AppView);
    }
  }, []);
  
  // Save current view to local storage when it changes
  useEffect(() => {
    localStorage.setItem('taleforge-view', currentView);
  }, [currentView]);
  
  const navigateToHome = () => {
    setCurrentView(AppView.HOME);
  };
  
  const navigateToCharacter = () => {
    setCurrentView(AppView.CHARACTER);
  };
  
  const navigateToStory = () => {
    setCurrentView(AppView.STORY);
  };
  
  const startNewJourney = () => {
    resetCharacter();
    resetStory();
    navigateToCharacter();
  };
  
  const continueJourney = () => {
    if (character && Object.keys(character).length > 0) {
      navigateToStory();
    } else {
      navigateToCharacter();
    }
  };
  
  return (
    <div className="min-h-screen pb-10 transition-colors duration-300">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div onClick={navigateToHome} className="flex items-center cursor-pointer">
          <BookOpenIcon className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-2xl font-bold text-primary">
            TaleForge
            <span className="text-sm align-top font-handwritten animate-glow"> Interactive</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-2">
            <Button 
              variant="ghost" 
              onClick={navigateToHome}
              className={currentView === AppView.HOME ? 'bg-muted' : ''}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={navigateToCharacter}
              className={currentView === AppView.CHARACTER ? 'bg-muted' : ''}
            >
              Character
            </Button>
            <Button 
              variant="ghost" 
              onClick={navigateToStory}
              className={currentView === AppView.STORY ? 'bg-muted' : ''}
              disabled={!character || Object.keys(character).length === 0}
            >
              Adventure
            </Button>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      
      <main className="container mx-auto mt-8 animate-fade-in">
        {currentView === AppView.HOME && (
          <HubHome 
            onNewJourney={startNewJourney} 
            onContinueJourney={continueJourney}
            hasCharacter={character && Object.keys(character).length > 0}
          />
        )}
        
        {currentView === AppView.CHARACTER && (
          <CharacterGenerator 
            character={character}
            generateCharacter={generateCharacter}
            onContinue={navigateToStory}
          />
        )}
        
        {currentView === AppView.STORY && (
          <StoryAdventure 
            character={character}
            storyState={storyState}
            onBackToHub={navigateToHome}
          />
        )}
      </main>
      
      <footer className="container mx-auto mt-16 text-center">
        <p className="text-xs opacity-70 font-handwritten">
          TaleForge Interactive Story Generator & Adventure Hub
        </p>
      </footer>
    </div>
  );
};

export default Index;
