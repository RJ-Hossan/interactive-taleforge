
import React from 'react';
import { Sparkles, Book, User, Bookmark, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface HubHomeProps {
  onNewJourney: () => void;
  onContinueJourney: () => void;
  hasCharacter: boolean;
}

const HubHome: React.FC<HubHomeProps> = ({ onNewJourney, onContinueJourney, hasCharacter }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          TaleForge
          <span className="text-accent animate-glow"> Interactive</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          Create unique characters and embark on interactive adventures where your choices shape the story.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            onClick={onNewJourney} 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
          >
            <Sparkles className="mr-2 h-5 w-5" /> 
            New Journey
          </Button>
          {hasCharacter && (
            <Button 
              onClick={onContinueJourney} 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Book className="mr-2 h-5 w-5" /> 
              Continue Adventure
            </Button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="parchment">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-fantasy-purple" /> 
              Character Generator
            </CardTitle>
            <CardDescription>
              Forge unique heroes with distinct traits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Create randomly generated characters with unique names, backgrounds, 
              personality traits, and special abilities for your adventure.
            </p>
          </CardContent>
        </Card>
        
        <Card className="parchment">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-fantasy-purple" /> 
              Interactive Storytelling
            </CardTitle>
            <CardDescription>
              Your choices shape the narrative
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Embark on branching adventures where each decision 
              influences the outcome of your character's journey.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="theme-fantasy rounded-lg p-6 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Begin Your Adventure?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Start by creating a character, then embark on an adventure 
          where your decisions will determine your fate.
        </p>
        <Button onClick={onNewJourney} className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white">
          <Plus className="mr-2 h-4 w-4" /> Create Your Character
        </Button>
      </div>
    </div>
  );
};

export default HubHome;
