
import { StorySegment } from '@/types/story';

export const storyData: StorySegment[] = [
  {
    id: 'intro',
    title: 'The Call to Adventure',
    text: 'The village of Elmridge sits nestled between ancient forests and rolling hills. Life here has been peaceful for generations, but recently strange occurrences have left the villagers uneasy.\n\nLast night, the elder spoke of a darkness growing in the Whispering Woods to the north. Animals fleeing, streams turning murky, and eerie lights glimpsed between the trees after sunset.\n\nThis morning, you awake to urgent knocking at your door. It\'s Maren, the innkeeper\'s daughter, her face pale with worry.\n\n"The elder has called for you," she says breathlessly. "Something\'s happened at the old watchtower. They say you\'re the only one who can help."',
    setting: 'village',
    choices: [
      {
        id: 'accept-call',
        text: 'Accept the call to investigate the watchtower',
        hint: 'Your skills might be exactly what\'s needed.',
        result: 'watchtower'
      },
      {
        id: 'gather-supplies',
        text: 'Agree to help, but insist on gathering proper supplies first',
        hint: 'Preparation could be crucial for whatever awaits.',
        result: 'supply-gathering'
      },
      {
        id: 'seek-info',
        text: 'Ask Maren for more details before deciding',
        hint: 'Knowledge is power.',
        result: 'maren-info'
      }
    ]
  },
  
  {
    id: 'watchtower',
    title: 'The Abandoned Watchtower',
    text: 'You follow the winding path north of the village until the crumbling watchtower comes into view. Once a proud structure, it now stands partly reclaimed by nature, its stone walls embraced by vines and moss.\n\nAs you approach, you notice the air grows unnaturally still. No birdsong. No rustling leaves. Just silence.\n\nAt the base of the tower, the village elder waits with three armed guards. Their faces are grim.\n\n"Thank you for coming," the elder says, voice barely above a whisper. "Two nights ago, something emerged from the forest and entered the tower. Joral followed it but never returned. Last night, we saw lights at the top—moving in patterns no natural flame would make."',
    setting: 'village',
    choices: [
      {
        id: 'enter-tower',
        text: 'Enter the tower alone to investigate',
        hint: 'You work best unhindered.',
        result: 'tower-interior'
      },
      {
        id: 'take-guards',
        text: 'Request two guards to accompany you inside',
        hint: 'Additional protection might be wise.',
        result: 'tower-with-guards'
      },
      {
        id: 'circle-tower',
        text: 'Circle the tower first to look for other clues',
        hint: 'A thorough examination might reveal something important.',
        result: 'tower-exterior'
      }
    ]
  },
  
  {
    id: 'tower-interior',
    title: 'Ascending the Tower',
    text: 'You push open the heavy wooden door, which groans on ancient hinges. Inside, dust motes dance in the beams of light filtering through cracks in the walls. A spiral staircase winds upward, disappearing into darkness.\n\nAs your eyes adjust to the dim light, you notice unusual markings scratched into the stone floor—symbols you\'ve never seen before, arranged in a circular pattern. In the center of the circle lies a small leather pouch, partially open.\n\nFrom somewhere above, you hear a faint, rhythmic tapping sound.',
    setting: 'castle',
    choices: [
      {
        id: 'examine-symbols',
        text: 'Examine the strange symbols more closely',
        hint: 'These markings might hold important clues.',
        result: 'strange-symbols'
      },
      {
        id: 'check-pouch',
        text: 'Inspect the leather pouch',
        hint: 'Someone left this here for a reason.',
        result: 'leather-pouch'
      },
      {
        id: 'follow-sound',
        text: 'Follow the tapping sound up the stairs',
        hint: 'The source of that noise might lead to answers.',
        result: 'upper-tower'
      }
    ]
  },
  
  {
    id: 'strange-symbols',
    title: 'The Arcane Circle',
    text: 'You kneel beside the circular arrangement of symbols, careful not to disturb the pattern. The markings appear to have been etched with a blade, cutting slightly into the stone floor.\n\nAs you study them, realization dawns—these are ancient runes, similar to those mentioned in stories told by traveling scholars. They form a ritual circle, designed to channel magical energies.\n\nYour finger hovers over one particular symbol that repeats around the circle\'s edge. It resembles a crescent moon with three stars.\n\nSuddenly, the runes flicker with a faint blue luminescence, responding to your presence. The tapping sound above grows louder, more insistent.',
    setting: 'castle',
    choices: [
      {
        id: 'activate-circle',
        text: 'Place your hand in the center of the circle',
        hint: 'Your intuition tells you this might reveal something hidden.',
        result: 'activate-runes'
      },
      {
        id: 'copy-symbols',
        text: 'Quickly sketch the symbols to study later',
        hint: 'This knowledge could be valuable.',
        result: 'document-runes'
      },
      {
        id: 'check-pouch-after',
        text: 'Now examine the leather pouch',
        hint: 'The pouch might be connected to these symbols.',
        result: 'leather-pouch'
      }
    ]
  },
  
  {
    id: 'leather-pouch',
    title: 'Contents of the Pouch',
    text: 'You carefully pick up the leather pouch. It\'s warm to the touch, as if recently handled. Opening it fully, you find three items inside:\n\nA small crystal shard that pulses with inner light, changing from blue to purple and back again.\n\nA folded piece of parchment with a partial map drawn in what appears to be charcoal. It shows the watchtower and a path leading deep into the Whispering Woods to a location marked with an X.\n\nA brass key with intricate engravings, unlike any lock design you\'ve seen in the village.\n\nAs you examine these items, dust falls from the ceiling above—something is moving on the upper floors.',
    setting: 'castle',
    choices: [
      {
        id: 'take-items',
        text: 'Take all items and head up the stairs',
        hint: 'These could be crucial for whatever lies ahead.',
        result: 'upper-tower-prepared'
      },
      {
        id: 'examine-crystal',
        text: 'Focus on examining the crystal more closely',
        hint: 'The pulsing light seems magical in nature.',
        result: 'study-crystal'
      },
      {
        id: 'follow-map',
        text: 'Decide to follow the map into the woods instead',
        hint: 'The source of the trouble might be at the marked location.',
        result: 'follow-forest-path'
      }
    ]
  },
  
  {
    id: 'upper-tower',
    title: 'The Upper Chamber',
    text: 'The ancient stairs creak beneath your weight as you ascend. Cobwebs brush against your face, and the air grows noticeably colder with each step.\n\nYou emerge into a circular chamber that must once have served as the watchmen\'s quarters. Broken furniture lies scattered about, and a rusted brazier stands in the center of the room. The tapping sound is louder here but still comes from above.\n\nA gust of wind blows through the glassless windows, carrying the scent of pine and something else—something acrid and unnatural.\n\nOn the far wall, you notice a door hanging slightly ajar, revealing another staircase leading to the tower\'s top level.',
    setting: 'castle',
    choices: [
      {
        id: 'search-room',
        text: 'Search the room for anything useful',
        hint: 'There might be clues about what happened here.',
        result: 'search-quarters'
      },
      {
        id: 'continue-up',
        text: 'Continue up to the top level',
        hint: 'The source of the tapping awaits above.',
        result: 'tower-top'
      },
      {
        id: 'call-out',
        text: 'Call out to see if anyone responds',
        hint: 'Joral might still be alive.',
        result: 'call-out-tower'
      }
    ]
  },
  
  {
    id: 'tower-top',
    title: 'The Observatory',
    text: 'You emerge onto the tower\'s top level—an open platform once used as an observation post. The panoramic view of the forest stretching to the distant mountains would be breathtaking if not for the unnerving sight directly before you.\n\nIn the center of the platform stands a stone pedestal that wasn\'t part of the original tower design. Atop it rests a metallic orb that spins slowly, defying gravity, hovering just above the stone. With each rotation, it emits a soft tap—the sound you\'ve been hearing.\n\nAround the pedestal, glowing runes identical to those on the ground floor form a protective circle. And beside it, slumped against the battlements, is the still form of Joral, the missing villager.',
    setting: 'castle',
    choices: [
      {
        id: 'check-joral',
        text: 'Rush to check if Joral is still alive',
        hint: 'His survival is your priority.',
        result: 'help-joral'
      },
      {
        id: 'examine-orb',
        text: 'Cautiously approach the orb to examine it',
        hint: 'This strange object is clearly important.',
        result: 'mysterious-orb'
      },
      {
        id: 'disrupt-runes',
        text: 'Try to disrupt the rune circle with your foot',
        hint: 'Breaking the circle might deactivate whatever magic is at work.',
        result: 'disrupt-magic'
      }
    ]
  },
  
  {
    id: 'mysterious-orb',
    title: 'The Spinning Orb',
    text: 'You approach the pedestal carefully, studying the floating orb. Up close, you can see it\'s made of a dark metal with an iridescent sheen, covered in tiny engravings that shift and change as it rotates. It emits a low hum beneath the tapping sound.\n\nAs you move closer, the orb\'s rotation speeds up slightly, as if responding to your presence. The runes on the floor pulse brighter.\n\nSomething about the orb feels wrong—unnatural and out of place, like it belongs to another world entirely. Yet it also possesses a strange beauty, almost hypnotic in its perfect motion.\n\nFrom the corner of your eye, you notice Joral\'s finger twitch. He\'s alive, but barely.',
    setting: 'castle',
    choices: [
      {
        id: 'touch-orb',
        text: 'Reach out to touch the orb',
        hint: 'Your instincts tell you this object is key to everything.',
        result: 'contact-orb'
      },
      {
        id: 'help-joral-now',
        text: 'Turn away from the orb to help Joral first',
        hint: 'His life matters more than this mystery.',
        result: 'help-joral'
      },
      {
        id: 'use-crystal',
        text: 'If you have the crystal, use it near the orb',
        hint: 'The crystal\'s pulsing might be connected to this device.',
        result: 'crystal-orb-interaction'
      }
    ]
  },
  
  {
    id: 'help-joral',
    title: 'The Survivor',
    text: 'You rush to Joral\'s side, finding him pale and cold but still breathing. His clothes are torn, and a strange ashen residue covers his hands and face. As you check him for injuries, his eyes flutter open, wide with terror.\n\n"Don\'t... touch it," he gasps, clutching your arm with surprising strength. "They\'re coming through... from the other side."\n\nHe coughs weakly, then continues: "The orb is a doorway. I saw them... shadows with gleaming eyes. They pushed it through first." His gaze drifts to the spinning orb, which has begun to rotate faster. "They spoke in my mind. They\'re looking for something buried in the forest. Something ancient."\n\nThe tapping from the orb grows louder, falling into rhythm with a deep humming that seems to vibrate through the entire tower.',
    setting: 'castle',
    choices: [
      {
        id: 'evacuate-joral',
        text: 'Try to get Joral out of the tower immediately',
        hint: 'His safety must come first.',
        result: 'escape-tower'
      },
      {
        id: 'confront-orb',
        text: 'Ask Joral how to stop the orb',
        hint: 'He might know how to end this threat.',
        result: 'orb-weakness'
      },
      {
        id: 'forest-secret',
        text: 'Ask about what might be buried in the forest',
        hint: 'This knowledge could be crucial.',
        result: 'ancient-secret'
      }
    ]
  },
  
  {
    id: 'escape-tower',
    title: 'Desperate Escape',
    text: 'You help Joral to his feet, supporting his weight as he stumbles. "We need to leave now," you tell him, eyeing the orb warily as its rotation speed continues to increase.\n\nJust as you reach the stairway entrance, a blinding flash erupts from the orb, accompanied by a thunderous crack. The tower shudders beneath your feet, and stones begin to fall from above.\n\n"It\'s too late," Joral whispers. "They\'re coming through."\n\nThe air around the orb seems to fold and distort, creating a shimmering curtain of energy. Through this distortion, you glimpse movement—dark, flowing shapes with points of cold light where eyes might be.\n\nThe stairway offers your only escape, but debris is already blocking parts of it. The tower may not stand much longer.',
    setting: 'castle',
    choices: [
      {
        id: 'brave-stairs',
        text: 'Make a dash for the stairs, helping Joral as best you can',
        hint: 'Speed might be your only advantage.',
        result: 'desperate-descent'
      },
      {
        id: 'use-map',
        text: 'If you have the map, check it quickly for another way out',
        hint: 'The map might show a secret passage.',
        result: 'map-revelation'
      },
      {
        id: 'stand-fight',
        text: 'Stand your ground and prepare to face what comes through',
        hint: 'Someone must stop these entities from reaching the village.',
        result: 'confrontation'
      }
    ]
  },
  
  {
    id: 'desperate-descent',
    title: 'Race Against Collapse',
    text: 'With Joral leaning heavily on your shoulder, you rush toward the crumbling stairway. Behind you, the dimensional tear grows wider, the shadowy entities pushing closer to our reality.\n\nThe descent is treacherous. Stones fall around you, steps crumble beneath your feet, and the entire structure groans as ancient mortar fails. Halfway down, a large section of stairway has collapsed entirely, leaving a gap of about six feet.\n\nJoral looks at you with resignation. "I\'ll slow you down too much. You need to jump across and continue alone."\n\nFrom above, you hear unearthly screeches as the first of the shadow creatures fully materializes in our world. Time is running out.',
    setting: 'castle',
    choices: [
      {
        id: 'jump-alone',
        text: 'Reluctantly leave Joral and jump across to save yourself',
        hint: 'Someone must warn the village.',
        result: 'abandon-joral'
      },
      {
        id: 'jump-together',
        text: 'Refuse to leave him and attempt to jump together',
        hint: 'You won\'t abandon someone in need.',
        result: 'risky-jump'
      },
      {
        id: 'find-alternative',
        text: 'Quickly look for another way across',
        hint: 'There might be a safer option if you\'re observant.',
        result: 'creative-crossing'
      }
    ]
  },
  
  {
    id: 'risky-jump',
    title: 'Leap of Faith',
    text: 'You tighten your grip around Joral\'s waist. "We go together or not at all," you tell him firmly.\n\nBacking up as far as the narrow stairway allows, you take a deep breath. "On three," you say. Joral nods weakly.\n\nOne.\n\nTwo.\n\nThree!\n\nYou push forward with all your strength, leaping into open air with Joral in tow. For a moment, time seems to slow as you soar over the gap.\n\nYour leading foot finds purchase on the crumbling edge of the far side. For a terrifying moment, you teeter on the brink, Joral\'s weight threatening to pull you both into the abyss below. Then, with a surge of desperate energy, you pull forward, tumbling onto the relative safety of the continuing stairway.\n\nJoral gasps in pain but manages a grateful nod. Above, the inhuman screeching grows closer.',
    setting: 'castle',
    choices: [
      {
        id: 'continue-descent',
        text: 'Continue your descent as quickly as possible',
        hint: 'Don\'t stop until you reach safety.',
        result: 'tower-exit'
      },
      {
        id: 'use-key',
        text: 'If you have the brass key, check if it matches any door nearby',
        hint: 'This might reveal a safer escape route.',
        result: 'hidden-passage'
      },
      {
        id: 'collapse-stairs',
        text: 'Try to collapse the remaining stairs behind you',
        hint: 'This might slow down your pursuers.',
        result: 'destroy-stairs'
      }
    ]
  },
  
  {
    id: 'tower-exit',
    title: 'Emerging Into Daylight',
    text: 'You half-carry, half-drag Joral down the remaining stairs, the tower shaking violently around you. Dust and debris rain down as support beams crack overhead.\n\nFinally, you stumble through the doorway into open air. The village elder and guards rush forward to help as you collapse onto the grass, pulling Joral clear of the tower entrance.\n\n"What happened up there?" the elder demands, but before you can answer, a deafening roar emanates from the tower.\n\nAll eyes turn to witness the upper half of the structure dissolve in a swirling vortex of darkness and unnatural light. Shadow figures pour out like smoke, circling the remains of the tower before streaming off toward the northern forest.\n\nJoral clutches the elder\'s robe. "They\'re heading for the ancient burial site," he gasps. "The one forbidden in the old stories."',
    setting: 'village',
    choices: [
      {
        id: 'pursue-shadows',
        text: 'Volunteer to pursue the shadow creatures',
        hint: 'Someone needs to find out what they\'re after.',
        result: 'forest-pursuit'
      },
      {
        id: 'protect-village',
        text: 'Urge everyone to return to the village and prepare defenses',
        hint: 'The safety of Elmridge must come first.',
        result: 'village-defense'
      },
      {
        id: 'consult-scholars',
        text: 'Suggest consulting the village archives about the burial site',
        hint: 'Knowledge might be your best weapon against this threat.',
        result: 'ancient-lore'
      }
    ]
  },
  
  {
    id: 'forest-pursuit',
    title: 'Into the Whispering Woods',
    text: 'With determination in your heart, you gather what supplies you can from the guards and set off toward the northern forest. The elder calls after you, "Return before nightfall! The woods are not safe after dark—even less so now!"\n\nThe Whispering Woods have always had an eerie quality, but today the sensation is magnified. The usual forest sounds—birds, insects, rustling leaves—are absent, replaced by an unnatural silence broken only by occasional whispers that seem to come from nowhere and everywhere.\n\nYou follow the trail of disturbed vegetation and strange, scorched markings on trees that indicate the passage of the shadow creatures. The path leads deeper into the woods, toward an area locals have long avoided—a section of forest where the trees grow too close together and legends speak of people vanishing without a trace.\n\nAfter nearly an hour of careful tracking, you notice something unusual ahead: a perfect circle where no plants grow, surrounded by stones placed in an intentional pattern. In the center stands a single ancient monolith covered in weathered carvings.',
    setting: 'forest',
    choices: [
      {
        id: 'examine-monolith',
        text: 'Approach the monolith to examine the carvings',
        hint: 'These symbols might explain what the shadow creatures seek.',
        result: 'ancient-monument'
      },
      {
        id: 'circle-clearing',
        text: 'Circle the clearing first to look for tracks or signs of the creatures',
        hint: 'A cautious approach might reveal more information.',
        result: 'shadow-tracks'
      },
      {
        id: 'use-crystal-forest',
        text: 'If you have the crystal, check if it reacts to this place',
        hint: 'The pulsing crystal might be connected to this site.',
        result: 'crystal-resonance'
      }
    ]
  },
  
  {
    id: 'ancient-monument',
    title: 'The Forgotten Sentinel',
    text: 'You approach the monolith cautiously. Standing about twelve feet tall, the stone appears impossibly old, its surface weathered by countless seasons yet still bearing visible carvings. As you draw closer, you realize the symbols are similar to those from the tower, but more elaborate.\n\nThe carvings tell a story through images: beings of light descending from the stars, a great battle against shadowy figures, and finally the sealing away of something beneath the earth. At the base of the monolith, one carving shows a key-like object being used to lock a doorway.\n\nAs your fingers trace the ancient images, the ground beneath your feet subtly vibrates. Something about your presence—or perhaps your touch—has awakened the site.\n\nSuddenly, you hear the snap of breaking branches behind you. You\'re not alone in this clearing anymore.',
    setting: 'forest',
    choices: [
      {
        id: 'turn-confront',
        text: 'Turn quickly to confront whatever approaches',
        hint: 'Better to face danger directly.',
        result: 'forest-confrontation'
      },
      {
        id: 'hide-observe',
        text: 'Duck behind the monolith to hide and observe',
        hint: 'Gathering information before acting might be wiser.',
        result: 'hidden-observation'
      },
      {
        id: 'activate-monolith',
        text: 'If you have the brass key, try to use it with the monolith',
        hint: 'The key and lock carving can\'t be a coincidence.',
        result: 'unlock-secret'
      }
    ]
  },
  
  {
    id: 'forest-confrontation',
    title: 'Facing the Unknown',
    text: 'You spin around, ready to face whatever approaches. To your surprise, it\'s not a shadow creature but a woman dressed in worn leather armor adorned with symbols of nature. A bow is slung across her back, and a curved dagger hangs at her hip. Her eyes, sharp and assessing, fix on you with suspicion.\n\n"You shouldn\'t be here," she says in a low voice. "This ground is forbidden for good reason."\n\nShe steps further into the clearing, moving with the grace of someone completely at home in the forest. "I\'ve been tracking those shadow abominations since they emerged. They\'re searching for something buried beneath this monument—something that must remain locked away."\n\nShe glances at the monolith, then back to you. "I am Naeris, guardian of these woods. Now tell me quickly—why are you here, and what do you know of these events?"',
    setting: 'forest',
    choices: [
      {
        id: 'tell-truth',
        text: 'Tell her everything about the tower and what you\'ve learned',
        hint: 'A potential ally deserves honesty.',
        result: 'forest-alliance'
      },
      {
        id: 'ask-knowledge',
        text: 'Ask what she knows about what\'s buried here',
        hint: 'Her knowledge as a guardian could be valuable.',
        result: 'guardian-knowledge'
      },
      {
        id: 'show-items',
        text: 'Show her the items you collected from the tower, if you have them',
        hint: 'These artifacts might mean something to her.',
        result: 'recognize-artifacts'
      }
    ]
  },
  
  {
    id: 'forest-alliance',
    title: 'A New Ally',
    text: 'You explain everything—the events at the tower, Joral\'s warnings, and your pursuit of the shadow creatures. Naeris listens intently, her expression growing increasingly grave.\n\n"The barriers between worlds are weakening," she says when you finish. "My people have guarded this secret for generations. Beneath this clearing lies an ancient vault containing an artifact of immense power—the Astral Prism. It was sealed away centuries ago after nearly being used to merge our world with the shadow realm."\n\nShe gestures to the surrounding trees, where you now notice subtle carvings and runes etched into the bark. "These wards have kept the vault sealed, but they\'re failing now that the shadow entities have found a way through."\n\nA distant shriek echoes through the forest. Naeris tenses, drawing her bow in one fluid motion. "They\'re coming. We don\'t have much time to decide our course."',
    setting: 'forest',
    choices: [
      {
        id: 'reinforce-wards',
        text: 'Offer to help Naeris reinforce the protective wards',
        hint: 'Preventing access to the vault is the priority.',
        result: 'strengthen-barriers'
      },
      {
        id: 'prepare-ambush',
        text: 'Suggest setting an ambush for the approaching creatures',
        hint: 'A good offense might be the best defense.',
        result: 'forest-ambush'
      },
      {
        id: 'retrieve-artifact',
        text: 'Propose retrieving the artifact before the shadows can claim it',
        hint: 'The Astral Prism might be safer in your hands than left vulnerable.',
        result: 'enter-vault'
      }
    ]
  },
  
  {
    id: 'enter-vault',
    title: 'The Hidden Vault',
    text: 'Naeris considers your suggestion with a troubled expression. "Opening the vault is dangerous... but leaving the Prism vulnerable could be worse. We\'ll need the Guardian\'s Key to enter."\n\nShe presses her palm against a specific pattern on the monolith. The ground trembles, and the earth around the monolith\'s base recedes, revealing a spiral staircase descending into darkness.\n\n"Once we enter, the shadows will sense the vault\'s opening," she warns. "We\'ll need to be quick."\n\nYou follow Naeris down the ancient steps, the walls around you inscribed with glowing runes that provide dim illumination. The air grows colder with each step, carrying the scent of stone untouched by time.\n\nAt the bottom, you enter a circular chamber with a pedestal at its center. Hovering above it is a crystalline object—a multifaceted prism that seems to contain swirling galaxies and stars within its transparent form.\n\n"The Astral Prism," Naeris whispers reverently. "Said to contain the essence of a dying star, gifted to our world by celestial beings as a source of protection."',
    setting: 'cave',
    choices: [
      {
        id: 'take-prism',
        text: 'Carefully approach to take the Prism',
        hint: 'With great power comes great responsibility.',
        result: 'claim-artifact'
      },
      {
        id: 'ask-instructions',
        text: 'Ask Naeris how the Prism can be used against the shadows',
        hint: 'Understanding its power is crucial before wielding it.',
        result: 'prism-knowledge'
      },
      {
        id: 'sense-danger',
        text: 'Something feels wrong—suggest leaving immediately',
        hint: 'Your instincts sense a trap or danger.',
        result: 'vault-danger'
      }
    ]
  },
  
  {
    id: 'claim-artifact',
    title: 'Power of the Stars',
    text: 'You approach the pedestal slowly, drawn by the hypnotic beauty of the Astral Prism. As your hands near it, the swirling galaxies within seem to react to your presence, spinning faster in anticipation.\n\n"Be careful," Naeris cautions. "It will bind itself to your essence."\n\nYour fingers close around the Prism. Immediately, a surge of energy courses through your body—cold as starlight yet burning with potential. Visions flash before your eyes: distant worlds, ancient beings of light, and the shadow realm pressing against the boundaries of reality. You understand, with sudden clarity, that the Prism is both a key and a seal—capable of opening doorways between worlds or locking them shut forever.\n\nAs the visions fade, you hear Naeris gasp. The chamber has begun to shake, dust falling from the ceiling as a terrible shrieking sound penetrates from above.\n\n"They\'ve found us," she says urgently. "The shadow entities can sense the Prism\'s awakening. We need to leave now!"',
    setting: 'cave',
    choices: [
      {
        id: 'flee-vault',
        text: 'Run for the exit with the Prism',
        hint: 'Speed is your best chance of escape.',
        result: 'escape-pursuit'
      },
      {
        id: 'use-prism-defense',
        text: 'Try to use the Prism\'s power against the approaching shadows',
        hint: 'The artifact responded to you—perhaps you can control it.',
        result: 'channel-starlight'
      },
      {
        id: 'alternative-exit',
        text: 'Ask Naeris if there\'s another way out of the vault',
        hint: 'Ancient structures often have secret passages.',
        result: 'secret-tunnel'
      }
    ]
  },
  
  {
    id: 'channel-starlight',
    title: 'Awakening Power',
    text: 'With shadows pouring into the stairwell, you raise the Astral Prism high, focusing your will into it. The artifact responds instantly, pulsing with brilliant light that fills the chamber.\n\nYou feel the Prism drawing energy from you, connecting to your inner essence as Naeris warned. Instinctively, you direct this power toward the encroaching darkness. Beams of starlight erupt from the Prism\'s facets, striking the shadow entities as they reach the chamber entrance.\n\nThe creatures recoil with unearthly screams, their smoky forms dissipating where touched by the light. But for each one banished, more press forward, and you feel your strength draining rapidly as the Prism channels your life force.\n\nNaeris grabs your arm. "You can\'t fight them all—the Prism will consume you before that happens! We need to escape and seal the vault entrance!"\n\nYour vision starts to blur at the edges as the Prism continues to draw from your essence, its light fluctuating with your weakening state.',
    setting: 'cave',
    choices: [
      {
        id: 'break-connection',
        text: 'Break your connection with the Prism and run',
        hint: 'You can\'t help if you\'re drained completely.',
        result: 'retreat-exhausted'
      },
      {
        id: 'final-surge',
        text: 'Channel one final, powerful blast to clear an escape path',
        hint: 'A calculated risk that might save you both.',
        result: 'desperate-gambit'
      },
      {
        id: 'seal-command',
        text: 'Command the Prism to seal itself back in the vault',
        hint: 'If it truly responds to your will, this might work.',
        result: 'astral-lockdown'
      }
    ]
  },
  
  {
    id: 'desperate-gambit',
    title: 'Light Against Darkness',
    text: 'Drawing on your last reserves of strength, you focus your entire will into the Prism. The connection between you deepens, the artifact\'s power flowing through your veins like liquid starlight.\n\n"Cover your eyes!" you shout to Naeris as you feel the energy building to a crescendo.\n\nWith a thunderous release, the Prism erupts with blinding radiance. A shockwave of pure light expands outward, disintegrating the shadow entities nearest you and forcing the others to retreat up the stairwell. The effort leaves you staggering, barely conscious, the Prism now dim in your grasp.\n\nNaeris catches you before you fall, supporting your weight. "That was either very brave or very foolish," she says, a note of respect in her voice. "Come, the path is clear, but not for long."\n\nWith her help, you climb the stairs, emerging into the forest clearing just as the sun begins to set. The shadow creatures have scattered but not disappeared—dark shapes flit between distant trees, regrouping.',
    setting: 'forest',
    choices: [
      {
        id: 'village-return',
        text: 'Suggest returning to the village with the Prism',
        hint: 'The village elders might know more about using the artifact safely.',
        result: 'return-prism'
      },
      {
        id: 'naeris-hideout',
        text: 'Ask Naeris to lead you to a safe place to recover',
        hint: 'You need time to understand the Prism and regain your strength.',
        result: 'forest-sanctuary'
      },
      {
        id: 'final-stand',
        text: 'Propose making a stand at the monolith to end this threat',
        hint: 'With the Prism, you might be able to close the breach permanently.',
        result: 'monolith-confrontation'
      }
    ]
  },
  
  {
    id: 'forest-sanctuary',
    title: 'The Guardian\'s Haven',
    text: 'Still weak from channeling the Prism\'s power, you accept Naeris\'s support as she guides you deeper into the Whispering Woods. The path she follows is invisible to untrained eyes, marked only by subtle signs in nature that she reads with practiced ease.\n\nAfter nearly an hour of careful travel, you reach a massive oak tree that must be centuries old. Naeris places her hand on its bark, whispers words in an ancient language, and a section of the trunk shimmers and fades, revealing a hidden entrance.\n\nInside, the hollowed tree opens into a surprisingly spacious chamber lit by glowing mushrooms and filled with the tools of a forest guardian—herbs hanging to dry, maps etched on bark, and weapons of exquisite craftsmanship.\n\n"Rest here," she says, helping you to a moss-covered seat. "You\'re safe for the moment."\n\nAs your strength slowly returns, the Astral Prism in your possession begins to pulse with gentle light, responding to the magical nature of this sanctuary.',
    setting: 'forest',
    choices: [
      {
        id: 'learn-prism',
        text: 'Ask Naeris to teach you more about controlling the Prism',
        hint: 'Knowledge will help you master this powerful artifact.',
        result: 'prism-teachings'
      },
      {
        id: 'contact-allies',
        text: 'Suggest sending word to the village about what you\'ve discovered',
        hint: 'They should be warned about the growing shadow threat.',
        result: 'forest-messenger'
      },
      {
        id: 'scry-shadows',
        text: 'Try to use the Prism to locate where the shadow entities are now',
        hint: 'The artifact seems capable of far more than just light.',
        result: 'astral-vision'
      }
    ]
  },
  
  {
    id: 'prism-teachings',
    title: 'Secrets of the Stars',
    text: 'Naeris sits cross-legged before you, her eyes fixed on the Prism in your hands. "Few have ever wielded the Astral Prism," she begins. "Fewer still have survived its full awakening. The fact that it responds to you is... significant."\n\nShe guides you through focusing exercises, teaching you to channel your energy more efficiently when connecting with the artifact. "The Prism doesn\'t create power," she explains. "It amplifies and transforms what already exists within you. Learn to control the flow, or it will drain you completely."\n\nAs night falls outside, you practice under her watchful eye. Gradually, you learn to activate the Prism without exhausting yourself, creating controlled bursts of light and even forming protective barriers of stellar energy.\n\n"There\'s an ancient prophecy among my people," Naeris says as your training continues. "When shadows walk between worlds, a star-blessed hero will arise to restore the balance." She studies you thoughtfully. "Perhaps that\'s why the Prism chose you."',
    setting: 'forest',
    choices: [
      {
        id: 'accept-destiny',
        text: 'Accept the responsibility of being the "star-blessed hero"',
        hint: 'Embracing this role might grant you greater power.',
        result: 'embrace-prophecy'
      },
      {
        id: 'question-choice',
        text: 'Question why the Prism would choose you specifically',
        hint: 'Understanding the connection could reveal important truths.',
        result: 'destined-one'
      },
      {
        id: 'plan-action',
        text: 'Focus on planning your next move against the shadow threat',
        hint: 'Prophecy or not, action is needed soon.',
        result: 'strategic-planning'
      }
    ]
  },
  
  {
    id: 'embrace-prophecy',
    title: 'The Mantle of Destiny',
    text: '"If the Prism chose me, then I accept whatever responsibility comes with it," you declare, feeling a strange sense of rightness as you speak the words.\n\nNaeris\'s expression softens with something like relief. "Then let me show you what the prophecy truly means."\n\nShe retrieves an ancient scroll from a hidden compartment and unrolls it carefully. The parchment contains intricate illustrations showing a figure wielding a star-like object against encroaching darkness, while constellations align overhead.\n\n"The alignment happens tonight," she says quietly. "The Celestial Gate will open at midnight at the Whispering Lake. It\'s a doorway to the heart of the shadow realm—and our only chance to seal the breach permanently."\n\nShe rolls the scroll up again, eyes serious. "This was always meant to be more than defending ourselves. According to the prophecy, you must take the fight to them—journey through the Gate and use the Prism at the source of their power. It\'s a journey from which many would not return."',
    setting: 'forest',
    choices: [
      {
        id: 'accept-quest',
        text: 'Accept the quest to enter the shadow realm',
        hint: 'This is the ultimate solution to protect your world.',
        result: 'hero-journey'
      },
      {
        id: 'seek-companions',
        text: 'Ask if others can join you on this perilous journey',
        hint: 'No hero succeeds entirely alone.',
        result: 'gather-allies'
      },
      {
        id: 'alternative-solution',
        text: 'Ask if there\'s any alternative to entering the shadow realm',
        hint: 'There might be another way to use the Prism.',
        result: 'other-options'
      }
    ]
  },
  
  {
    id: 'hero-journey',
    title: 'Journey\'s Beginning',
    text: 'The full moon illuminates your path as you and Naeris make your way to Whispering Lake. The night is unnaturally still—no insects chirping, no night birds calling. Even the wind has died down to nothing more than occasional whispers through the leaves.\n\n"The worlds are already bleeding into each other," Naeris explains as you walk. "Nature feels the wrongness of it."\n\nWhen you reach the lake\'s edge, the sight takes your breath away. The water\'s surface is perfectly still, reflecting the star-filled sky so perfectly that the boundary between above and below seems nonexistent. At the center of the lake, a circle of ancient stone pillars rises from the water, glowing with faint blue light.\n\n"The Celestial Gate," Naeris says reverently. "Built by the First Guardians when the stars were young."\n\nAs you watch, the constellations above begin to shift, aligning into a pattern identical to the one on the ancient scroll. The reflection in the lake intensifies until the water itself seems to be filled with stars.\n\nYou feel the Astral Prism growing warm in your grasp, responding to the celestial alignment.',
    setting: 'forest',
    choices: [
      {
        id: 'enter-gate',
        text: 'Step into the lake and approach the stone circle',
        hint: 'Your destiny awaits beyond the gate.',
        result: 'cross-threshold'
      },
      {
        id: 'final-preparation',
        text: 'Ask Naeris for any final guidance before you go',
        hint: 'Her ancient knowledge might be crucial for your success.',
        result: 'guardian-wisdom'
      },
      {
        id: 'personal-moment',
        text: 'Take a moment to center yourself and prepare mentally',
        hint: 'Mental fortitude will be as important as physical strength.',
        result: 'inner-strength'
      }
    ]
  },
  
  {
    id: 'cross-threshold',
    title: 'Between Worlds',
    text: 'With determined steps, you wade into the lake. The water feels strange against your skin—neither cold nor warm, but vibrating with energy. As you move deeper, your reflection below shifts and changes, sometimes showing your current self, sometimes revealing glimpses of who you might become.\n\nNaeris remains at the shore, raising her hand in a solemn blessing. "May the stars guide your path," her voice carries across the water.\n\nAs you reach the stone circle at the lake\'s center, the Astral Prism begins to pulse in rhythm with the glowing pillars. You stand in the middle of the circle, water up to your waist, and raise the Prism above your head.\n\nInstantly, the stars in the water below you intensify to blinding brightness. You feel yourself falling—no, being pulled downward into the light. The sensation is disorienting but not frightening, as if you\'re returning to a place you\'ve always known.\n\nWhen the light fades, you find yourself standing in a landscape both familiar and alien. The sky above is filled with unfamiliar constellations, and the surrounding terrain resembles the Whispering Woods but with vegetation that glows with its own inner light. In the distance rises a towering obsidian spire—pulsing with dark energy that you can feel even from here.\n\nYou have crossed into the shadow realm.',
    setting: 'forest',
    choices: [
      {
        id: 'approach-spire',
        text: 'Journey toward the obsidian spire',
        hint: 'The source of the corruption lies there.',
        result: 'shadow-journey'
      },
      {
        id: 'explore-surroundings',
        text: 'Explore your immediate surroundings first',
        hint: 'Understanding this realm might reveal advantages.',
        result: 'shadow-exploration'
      },
      {
        id: 'use-prism-scan',
        text: 'Use the Prism to scan for hostile entities',
        hint: 'Caution may prevent an ambush.',
        result: 'detect-enemies'
      }
    ]
  },
  
  {
    id: 'shadow-journey',
    title: 'The Road to Darkness',
    text: 'You set off toward the obsidian spire, the Astral Prism clutched tightly in your hand. The landscape of the shadow realm shifts subtly as you walk—trees bend to watch your passage, the ground sometimes feels like it\'s breathing beneath your feet, and distant sounds echo strangely, as if coming from multiple directions at once.\n\nAs you travel, you notice that the Prism\'s light creates a protective aura around you. Shadow creatures scurry at the edges of your vision but keep their distance, hissing with frustration and fear at the starlight you carry.\n\nAfter what might be hours or minutes—time feels fluid here—you reach a river of flowing darkness that blocks your path. The liquid seems to be made of pure shadow, flowing uphill in defiance of natural law. No bridge spans its writhing current.\n\nOn the far bank, you spot a figure watching you—humanoid but clearly not human, with elongated limbs and eyes that gleam like cold stars. It raises a hand in what might be greeting or warning.\n\n"Star-carrier," its voice echoes directly in your mind. "You seek the Void Throne. I am Ix\'zalik, Keeper of Crossings. None may pass without proving their worth or offering suitable tribute."',
    setting: 'forest',
    choices: [
      {
        id: 'prove-worth',
        text: 'Ask how you can prove your worth',
        hint: 'A test of skill or courage might be preferable to payment.',
        result: 'shadow-trial'
      },
      {
        id: 'offer-tribute',
        text: 'Ask what tribute would be acceptable',
        hint: 'Negotiation might be faster, though costly.',
        result: 'shadow-bargain'
      },
      {
        id: 'force-crossing',
        text: 'Use the Prism\'s power to force your way across',
        hint: 'You carry the light of stars—perhaps that gives you authority here.',
        result: 'power-crossing'
      }
    ]
  }
];
