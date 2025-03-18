
import React, { useState } from 'react';
import { Sparkles, RefreshCw, Play, Save, User, BookOpen, Brain, Sword } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Character } from '@/types/character';

interface CharacterGeneratorProps {
  character: Character | null;
  generateCharacter: () => void;
  onContinue: () => void;
}

const CharacterGenerator: React.FC<CharacterGeneratorProps> = ({ 
  character, 
  generateCharacter, 
  onContinue 
}) => {
  const [activeTab, setActiveTab] = useState('appearance');
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Character Generator</h1>
        <p className="text-muted-foreground mb-6">Create a unique character for your adventure</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <Button 
            onClick={generateCharacter} 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
          >
            {character ? <RefreshCw className="mr-2 h-5 w-5" /> : <Sparkles className="mr-2 h-5 w-5" />}
            {character ? 'Regenerate Character' : 'Generate Character'}
          </Button>
          
          {character && (
            <Button 
              onClick={onContinue} 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Play className="mr-2 h-5 w-5" /> 
              Begin Adventure
            </Button>
          )}
        </div>
      </div>
      
      {character ? (
        <div className="animate-page-turn">
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {character.name}
            </h2>
            <p className="text-lg text-muted-foreground">{character.role}</p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="appearance" className="text-sm">
                <User className="h-4 w-4 mr-2 hidden sm:inline" /> Appearance
              </TabsTrigger>
              <TabsTrigger value="background" className="text-sm">
                <BookOpen className="h-4 w-4 mr-2 hidden sm:inline" /> Background
              </TabsTrigger>
              <TabsTrigger value="personality" className="text-sm">
                <Brain className="h-4 w-4 mr-2 hidden sm:inline" /> Personality
              </TabsTrigger>
              <TabsTrigger value="abilities" className="text-sm">
                <Sword className="h-4 w-4 mr-2 hidden sm:inline" /> Abilities
              </TabsTrigger>
            </TabsList>
            
            <div className="parchment fancy-border">
              <TabsContent value="appearance" className="animate-fade-in mt-0">
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 text-fantasy-navy">Physical Traits</h3>
                    <p className="mb-4 text-fantasy-navy">{character.appearance.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-bold text-fantasy-navy">Age</p>
                        <p className="text-fantasy-navy">{character.age} years</p>
                      </div>
                      <div>
                        <p className="font-bold text-fantasy-navy">Gender</p>
                        <p className="text-fantasy-navy">{character.gender}</p>
                      </div>
                      <div>
                        <p className="font-bold text-fantasy-navy">Hair</p>
                        <p className="text-fantasy-navy">{character.appearance.hair}</p>
                      </div>
                      <div>
                        <p className="font-bold text-fantasy-navy">Eyes</p>
                        <p className="text-fantasy-navy">{character.appearance.eyes}</p>
                      </div>
                      <div>
                        <p className="font-bold text-fantasy-navy">Height</p>
                        <p className="text-fantasy-navy">{character.appearance.height}</p>
                      </div>
                      <div>
                        <p className="font-bold text-fantasy-navy">Build</p>
                        <p className="text-fantasy-navy">{character.appearance.build}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-bold text-fantasy-navy">Distinctive Features</p>
                      <p className="text-fantasy-navy">{character.appearance.distinctive}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="background" className="animate-fade-in mt-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-fantasy-navy">Origin & History</h3>
                    <p className="mb-4 text-fantasy-navy">{character.background.origin}</p>
                    
                    <h4 className="font-bold mb-1 text-fantasy-navy">Key Events</h4>
                    <p className="mb-4 text-fantasy-navy">{character.background.keyEvents}</p>
                    
                    <h4 className="font-bold mb-1 text-fantasy-navy">Motivation</h4>
                    <p className="text-fantasy-navy">{character.background.motivation}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="personality" className="animate-fade-in mt-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-fantasy-navy">Character Traits</h3>
                    
                    <div className="mb-4">
                      {character.personality.traits.map((trait, index) => (
                        <span key={index} className="character-trait">{trait}</span>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1 text-fantasy-navy">Virtues</h4>
                      <p className="text-fantasy-navy">{character.personality.virtues}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1 text-fantasy-navy">Flaws</h4>
                      <p className="text-fantasy-navy">{character.personality.flaws}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-1 text-fantasy-navy">Famous Quote</h4>
                      <p className="handwritten text-lg">{character.personality.quote}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="abilities" className="animate-fade-in mt-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-fantasy-navy">Skills & Powers</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1 text-fantasy-navy">Primary Skills</h4>
                      <ul className="list-disc pl-5 text-fantasy-navy">
                        {character.abilities.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-1 text-fantasy-navy">Special Ability</h4>
                      <p className="text-fantasy-navy">{character.abilities.special.name} - {character.abilities.special.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-1 text-fantasy-navy">Weaknesses</h4>
                      <p className="text-fantasy-navy">{character.abilities.weakness}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      ) : (
        <Card className="parchment max-w-xl mx-auto text-center py-12">
          <CardContent>
            <p className="text-xl mb-6 text-fantasy-navy">Click "Generate Character" to create a randomly generated hero for your adventure!</p>
            <Button 
              onClick={generateCharacter} 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-5 w-5" /> Generate Character
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CharacterGenerator;

