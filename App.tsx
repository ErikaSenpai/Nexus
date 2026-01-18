import React, { useState, useEffect } from 'react';
import { GamePhase, Player, GameSettings, WordData } from './types';
import { DEFAULT_CATEGORIES, AI_CATEGORY_ID, RANDOM_CATEGORY_ID } from './constants';
import { generateWordWithAI } from './services/geminiService';
import { Users, User, Ghost, Eye, EyeOff, Play, ArrowLeft, Settings, Info, BrainCircuit, RefreshCw, Dices, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-components ---

// 1. Main Menu
const MainMenu: React.FC<{ onSelectGame: () => void }> = ({ onSelectGame }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2"
      >
        NEXUS
      </motion.h1>
      <p className="text-gray-400 mb-12">Hub de Minijuegos</p>
      
      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSelectGame}
          className="group relative overflow-hidden rounded-2xl bg-surface p-6 border border-white/5 hover:border-secondary/50 transition-all shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                <Ghost size={32} />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">El Impostor</h2>
                <p className="text-sm text-gray-400">Encuentra al espía entre nosotros</p>
              </div>
            </div>
            <Play className="text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </motion.button>
        
        {/* Placeholder for future games */}
        <div className="rounded-2xl bg-surface/50 p-6 border border-dashed border-white/5 flex items-center justify-center text-gray-600">
          <p>Próximamente más juegos...</p>
        </div>
      </div>

      {/* Install Button (Only visible if installable) */}
      <AnimatePresence>
        {deferredPrompt && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleInstallClick}
            className="absolute bottom-8 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
          >
            <Download size={16} />
            Instalar App
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// 2. Setup Screen
const SetupScreen: React.FC<{ 
  onStart: (settings: GameSettings) => void, 
  onBack: () => void 
}> = ({ onStart, onBack }) => {
  const [players, setPlayers] = useState(4);
  const [impostors, setImpostors] = useState(1);
  const [hints, setHints] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0].id);

  const handleStart = () => {
    onStart({ totalPlayers: players, impostorCount: impostors, useHints: hints, category: selectedCategory });
  };

  return (
    <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold">Configuración</h2>
      </header>

      <div className="space-y-8 flex-1">
        
        {/* Jugadores */}
        <div className="bg-surface p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Users className="text-primary" />
              <span className="font-semibold">Jugadores</span>
            </div>
            <span className="text-2xl font-bold text-primary">{players}</span>
          </div>
          <input 
            type="range" min="3" max="20" value={players} 
            onChange={(e) => {
              const val = parseInt(e.target.value);
              setPlayers(val);
              if (impostors >= val) setImpostors(val - 1);
            }}
            className="w-full accent-primary h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Impostores */}
        <div className="bg-surface p-6 rounded-2xl border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Ghost className="text-secondary" />
              <span className="font-semibold">Impostores</span>
            </div>
            <span className="text-2xl font-bold text-secondary">{impostors}</span>
          </div>
          <input 
            type="range" min="1" max={players - 1} value={impostors} 
            onChange={(e) => setImpostors(parseInt(e.target.value))}
            className="w-full accent-secondary h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Pistas */}
        <div 
          onClick={() => setHints(!hints)}
          className="bg-surface p-6 rounded-2xl border border-white/5 flex items-center justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-3">
            <Info className="text-accent" />
            <span className="font-semibold">Pista (1 Palabra)</span>
          </div>
          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${hints ? 'bg-accent' : 'bg-gray-700'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${hints ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
        </div>

         {/* Categoría */}
         <div className="space-y-3">
          <label className="text-gray-400 text-sm uppercase font-bold tracking-wider">Categoría</label>
          <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Botón Aleatorio */}
             <button
               onClick={() => setSelectedCategory(RANDOM_CATEGORY_ID)}
               className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                selectedCategory === RANDOM_CATEGORY_ID 
                ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500 text-white' 
                : 'bg-surface border-white/5 text-gray-400 hover:bg-surface/80'
              }`}
            >
              <Dices size={24} className={selectedCategory === RANDOM_CATEGORY_ID ? "text-amber-400" : ""} />
              <span className="text-sm font-medium">Aleatorio</span>
            </button>

            {DEFAULT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  selectedCategory === cat.id 
                  ? 'bg-primary/20 border-primary text-white' 
                  : 'bg-surface border-white/5 text-gray-400 hover:bg-surface/80'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
           {/* Botón IA separado */}
           <button
               onClick={() => setSelectedCategory(AI_CATEGORY_ID)}
               className={`w-full p-4 rounded-xl border flex items-center justify-center gap-3 transition-all ${
                selectedCategory === AI_CATEGORY_ID 
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500 text-white' 
                : 'bg-surface border-white/5 text-gray-400 hover:bg-surface/80'
              }`}
            >
              <BrainCircuit size={20} className={selectedCategory === AI_CATEGORY_ID ? "text-emerald-400" : ""} />
              <span className="text-sm font-medium">Generar con IA (Gemini)</span>
            </button>
        </div>

      </div>

      <div className="mt-8">
        <button 
          onClick={handleStart}
          className="w-full bg-white text-black font-bold py-4 rounded-xl text-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

// 3. Name Input Screen
const NameInputScreen: React.FC<{ 
  totalPlayers: number, 
  onConfirm: (names: string[]) => void,
  onBack: () => void 
}> = ({ totalPlayers, onConfirm, onBack }) => {
  const [names, setNames] = useState<string[]>(Array(totalPlayers).fill(''));
  
  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleConfirm = () => {
    // Fill empty names with defaults
    const finalNames = names.map((n, i) => n.trim() || `Jugador ${i + 1}`);
    onConfirm(finalNames);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto">
      <header className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft />
        </button>
        <h2 className="text-2xl font-bold">Nombres</h2>
      </header>
      
      <div className="flex-1 overflow-y-auto space-y-3 pb-4">
        {names.map((name, index) => (
          <div key={index} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-white/5">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-xs font-bold">
               {index + 1}
             </div>
             <input
              type="text"
              placeholder={`Nombre Jugador ${index + 1}`}
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              autoComplete="off"
             />
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <button 
          onClick={handleConfirm}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:opacity-90 transition-opacity"
        >
          ¡A Jugar!
        </button>
      </div>
    </div>
  );
};

// 4. Reveal Card Component
const RevealCard: React.FC<{
  player: Player,
  onNext: () => void,
  isLast: boolean
}> = ({ player, onNext, isLast }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Animations variants
  const coverVariants = {
    hidden: { y: 0 },
    visible: { y: -250, rotateX: 10, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } }
  };

  const handleInteraction = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-2">{player.name}</h2>
        <p className="text-gray-400 text-center mb-8">Es tu turno. Asegúrate que nadie mire.</p>

        {/* The Card Container */}
        <div className="relative h-96 w-full perspective-1000">
          
          {/* Secret Content (Underneath) */}
          <div className="absolute inset-0 bg-surface rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
             <motion.div
                variants={contentVariants}
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                className="space-y-6"
             >
                {player.role === 'impostor' ? (
                  <>
                    <Ghost size={64} className="text-secondary mx-auto animate-pulse" />
                    <div>
                      <h3 className="text-3xl font-black text-secondary uppercase tracking-widest mb-2">Impostor</h3>
                      <p className="text-gray-300">¡Engaña a los demás!</p>
                      {player.hint && (
                        <div className="mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                          <p className="text-xs text-secondary font-bold uppercase mb-1">Pista</p>
                          <p className="text-2xl font-bold text-secondary">"{player.hint}"</p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                      <User size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-400 mb-2">La palabra es:</h3>
                      <p className="text-4xl font-black text-white">{player.word}</p>
                      {/* En variaciones del juego, los civiles a veces no ven la pista, pero si la piden, la pueden ver aquí */}
                    </div>
                  </>
                )}
             </motion.div>
          </div>

          {/* The Cover (The "Pestañita") */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl flex flex-col items-center justify-center cursor-pointer border-t-2 border-white/20"
            variants={coverVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            onClick={handleInteraction}
          >
             <div className="absolute top-4 w-12 h-1 bg-white/20 rounded-full" />
             <div className="text-center space-y-4">
               {isRevealed ? (
                 <EyeOff size={48} className="text-white/80 mx-auto" />
               ) : (
                 <Eye size={48} className="text-white mx-auto animate-bounce" />
               )}
               <p className="text-white font-bold text-lg">
                 {isRevealed ? "Toca para ocultar" : "Toca para ver"}
               </p>
             </div>
          </motion.div>

        </div>

        {/* Action Button */}
        <div className="mt-10">
          {!isRevealed && (
            <button 
              onClick={onNext}
              className="w-full bg-surface border border-white/10 text-white font-bold py-4 rounded-xl text-lg hover:bg-white/5 transition-colors"
            >
              {isLast ? "Empezar Juego" : "Siguiente Jugador"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 5. Game Screen
const GameScreen: React.FC<{ 
  players: Player[], 
  category: string,
  onReset: () => void 
}> = ({ players, category, onReset }) => {
  const [revealedRoles, setRevealedRoles] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 text-center max-w-lg mx-auto">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mb-6 animate-pulse-slow shadow-2xl shadow-primary/30">
          <BrainCircuit size={48} className="text-white" />
        </div>
        
        <h2 className="text-4xl font-bold mb-2 text-white">¡A Debatir!</h2>
        <p className="text-xl text-gray-400 mb-8">
          Categoría: <span className="text-primary font-semibold">{category === AI_CATEGORY_ID ? 'Generada por IA' : category}</span>
        </p>

        <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 w-full mb-8">
          <p className="text-sm text-gray-400 mb-2">Estado</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-lg">JUEGO EN CURSO</span>
          </div>
        </div>

        {revealedRoles && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="w-full bg-surface rounded-xl overflow-hidden mb-6"
          >
            <div className="p-4 bg-white/5 font-bold">Roles</div>
            <div className="divide-y divide-white/5">
              {players.map(p => (
                <div key={p.id} className="p-3 flex justify-between items-center text-sm">
                  <span>{p.name}</span>
                  {p.role === 'impostor' ? (
                    <span className="text-secondary font-bold flex items-center gap-1"><Ghost size={12}/> Impostor</span>
                  ) : (
                    <span className="text-emerald-400">Civil</span>
                  )}
                </div>
              ))}
            </div>
            {players[0].word && (
              <div className="p-4 bg-primary/20 text-center border-t border-white/5">
                Palabra: <span className="font-bold text-white">{players[0].word}</span>
              </div>
            )}
          </motion.div>
        )}

      </div>

      <div className="w-full space-y-4">
        {!revealedRoles ? (
          <button 
            onClick={() => setRevealedRoles(true)}
            className="w-full bg-surface border border-white/10 text-white font-bold py-4 rounded-xl"
          >
            Revelar Roles
          </button>
        ) : (
          <button 
             onClick={onReset}
             className="w-full bg-white text-black font-bold py-4 rounded-xl"
          >
             Jugar de Nuevo
          </button>
        )}
      </div>
    </div>
  );
};

// --- Loading Component ---
const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background space-y-4">
    <RefreshCw className="animate-spin text-primary" size={48} />
    <p className="text-gray-400 animate-pulse">Generando partida con IA...</p>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [phase, setPhase] = useState<GamePhase>(GamePhase.MENU);
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Setup Phase -> Names Phase
  const handleStartSetup = async (newSettings: GameSettings) => {
    setSettings(newSettings);
    
    // Determine the category to use
    let targetCategoryId = newSettings.category;

    // Handle Random Selection
    if (targetCategoryId === RANDOM_CATEGORY_ID) {
      const randomCat = DEFAULT_CATEGORIES[Math.floor(Math.random() * DEFAULT_CATEGORIES.length)];
      targetCategoryId = randomCat.id;
    }

    // Logic for Word Selection
    if (targetCategoryId === AI_CATEGORY_ID) {
      setIsLoading(true);
      const generated = await generateWordWithAI();
      setIsLoading(false);
      if (generated) {
        setWordData(generated);
        setPhase(GamePhase.NAMES);
      } else {
        // Fallback if AI fails
        alert("Error conectando con la IA. Usando categoría 'Objetos' por defecto.");
        const fallback = DEFAULT_CATEGORIES.find(c => c.id === 'objects')!.words;
        const randomWord = fallback[Math.floor(Math.random() * fallback.length)];
        setWordData({ category: 'Objetos', ...randomWord });
        setPhase(GamePhase.NAMES);
      }
    } else {
      // Local list logic
      const cat = DEFAULT_CATEGORIES.find(c => c.id === targetCategoryId);
      if (cat) {
        const randomWord = cat.words[Math.floor(Math.random() * cat.words.length)];
        setWordData({ category: cat.name, ...randomWord });
        setPhase(GamePhase.NAMES);
      }
    }
  };

  // Names Phase -> Reveal Phase (Game Initialization)
  const handleConfirmNames = (names: string[]) => {
    if (!settings || !wordData) return;

    // Create roles
    const total = names.length;
    const roles: ('civilian' | 'impostor')[] = Array(total).fill('civilian');
    
    // Assign impostors randomly
    let assignedImpostors = 0;
    while (assignedImpostors < settings.impostorCount) {
      const randIdx = Math.floor(Math.random() * total);
      if (roles[randIdx] === 'civilian') {
        roles[randIdx] = 'impostor';
        assignedImpostors++;
      }
    }

    // Build Player objects
    const newPlayers: Player[] = names.map((name, index) => {
      const role = roles[index];
      const isImpostor = role === 'impostor';
      
      return {
        id: `p-${index}`,
        name,
        role,
        word: isImpostor ? undefined : wordData.word,
        hint: isImpostor 
              ? (settings.useHints ? wordData.hint : undefined) // Impostor gets hint if enabled
              : wordData.category // Civilians see category as hint, or the specific word hint (game variation) - keeping simple: Civilians see word.
      };
    });

    setPlayers(newPlayers);
    setCurrentPlayerIndex(0);
    setPhase(GamePhase.REVEAL);
  };

  const handleNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
      setPhase(GamePhase.PLAYING);
    }
  };

  const handleReset = () => {
    setPhase(GamePhase.MENU);
    setSettings(null);
    setPlayers([]);
    setWordData(null);
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-background text-white min-h-screen">
      <AnimatePresence mode="wait">
        {phase === GamePhase.MENU && (
          <motion.div key="menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <MainMenu onSelectGame={() => setPhase(GamePhase.SETUP)} />
          </motion.div>
        )}

        {phase === GamePhase.SETUP && (
          <motion.div key="setup" initial={{opacity:0, x: 100}} animate={{opacity:1, x: 0}} exit={{opacity:0, x: -100}}>
            <SetupScreen onStart={handleStartSetup} onBack={() => setPhase(GamePhase.MENU)} />
          </motion.div>
        )}

        {phase === GamePhase.NAMES && settings && (
          <motion.div key="names" initial={{opacity:0, x: 100}} animate={{opacity:1, x: 0}} exit={{opacity:0, x: -100}}>
            <NameInputScreen 
              totalPlayers={settings.totalPlayers} 
              onConfirm={handleConfirmNames}
              onBack={() => setPhase(GamePhase.SETUP)}
            />
          </motion.div>
        )}

        {phase === GamePhase.REVEAL && players.length > 0 && (
          <motion.div key="reveal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <RevealCard 
              key={currentPlayerIndex} // Force re-render for animation reset
              player={players[currentPlayerIndex]}
              isLast={currentPlayerIndex === players.length - 1}
              onNext={handleNextPlayer}
            />
          </motion.div>
        )}

        {phase === GamePhase.PLAYING && wordData && (
          <motion.div key="playing" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <GameScreen 
              players={players} 
              category={wordData.category} 
              onReset={handleReset} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}