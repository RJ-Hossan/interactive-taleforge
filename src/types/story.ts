
export interface Choice {
  id: string;
  text: string;
  hint?: string;
  requiredTrait?: string;
  result: string;
}

export interface StorySegment {
  id: string;
  title: string;
  text: string;
  setting: 'village' | 'forest' | 'castle' | 'cave' | 'mountains';
  choices: Choice[];
}

export interface StoryState {
  currentSegmentId: string;
  visitedSegments: string[];
  inventory: string[];
  relationships: Record<string, number>;
}
