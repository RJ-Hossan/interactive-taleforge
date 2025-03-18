
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bookmark, Home, RefreshCw, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Character } from '@/types/character';
import { StoryState, Choice } from '@/types/story';
import { useStory } from '@/hooks/useStory';

interface StoryAdventureProps {
  character: Character | null;
  storyState: StoryState;
  onBackToHub: () => void;
}

const StoryAdventure: React.FC<StoryAdventureProps> = ({ 
  character, 
  storyState,
  onBackToHub 
}) => {
  const { makeChoice, currentStorySegment, restart } = useStory();
  const [storyTheme, setStoryTheme] = useState('theme-fantasy');
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);
  
  useEffect(() => {
    // Set theme based on story location
    if (currentStorySegment?.setting === 'forest') {
      setStoryTheme('theme-forest');
    } else if (currentStorySegment?.setting === 'castle') {
      setStoryTheme('theme-castle');
    } else if (currentStorySegment?.setting === 'cave') {
      setStoryTheme('theme-cave');
    } else {
      setStoryTheme('theme-fantasy');
    }
  }, [currentStorySegment]);
  
  if (!character) {
    return (
      <div className="text-center">
        <p className="mb-4">You need to create a character first!</p>
        <Button onClick={onBackToHub}>Return to Hub</Button>
      </div>
    );
  }
  
  return (
    <div className={`story-container ${storyTheme} min-h-[600px] animate-fade-in`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" onClick={onBackToHub} className="text-current">
            <Home className="mr-2 h-5 w-5" /> Hub
          </Button>
          
          <div>
            <Button 
              variant="ghost" 
              onClick={() => setShowCharacterInfo(!showCharacterInfo)}
              className="text-current"
            >
              <User className="mr-2 h-5 w-5" /> 
              {character.name}
            </Button>
          </div>
        </div>
        
        {showCharacterInfo && (
          <div className="parchment mb-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-2">{character.name}</h3>
            <p className="mb-2">{character.role}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold">Traits</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {character.personality.traits.slice(0, 3).map((trait, i) => (
                    <span key={i} className="character-trait">{trait}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold">Special Ability</h4>
                <p>{character.abilities.special.name}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {currentStorySegment?.title || "Your Adventure"}
          </h2>
          
          <div className="parchment story-text mb-8">
            {currentStorySegment?.text.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          {currentStorySegment?.choices && currentStorySegment.choices.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-3 text-center">What will you do?</h3>
              {currentStorySegment.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => makeChoice(choice.id)}
                  className="story-choice w-full mb-3 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-lg font-medium">{choice.text}</p>
                      {choice.hint && (
                        <p className="text-sm text-muted-foreground mt-1 handwritten">
                          {choice.hint}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-lg">Your adventure has come to an end.</p>
              <div className="flex justify-center gap-4">
                <Button onClick={() => restart()} className="animate-fade-in">
                  <RefreshCw className="mr-2 h-4 w-4" /> Start Again
                </Button>
                <Button onClick={onBackToHub} variant="outline" className="animate-fade-in">
                  <Home className="mr-2 h-4 w-4" /> Return to Hub
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryAdventure;
