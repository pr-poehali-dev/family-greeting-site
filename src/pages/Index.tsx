import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const videoId = '1Hg6o4_Pmh8qH3SVKdApwVWIgCoXHEptJ';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <audio 
        ref={audioRef} 
        loop 
        volume={0.3}
        src="https://cdn.pixabay.com/download/audio/2022/05/13/audio_257112e3cc.mp3"
        onLoadedMetadata={(e) => {
          const audio = e.currentTarget;
          audio.volume = 0.3;
        }}
      >
        <track kind="captions" />
      </audio>
      
      <Button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg bg-primary/90 hover:bg-primary"
        size="icon"
      >
        {isMusicPlaying ? (
          <Icon name="Volume2" size={24} />
        ) : (
          <Icon name="VolumeX" size={24} />
        )}
      </Button>
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <img 
          src="https://cdn.poehali.dev/projects/651a1723-507b-4d9f-bd9b-ffb628539171/files/27ccf277-56df-4da1-b463-f0ad279d96bb.jpg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30 rotate-180">
        <img 
          src="https://cdn.poehali.dev/projects/651a1723-507b-4d9f-bd9b-ffb628539171/files/27ccf277-56df-4da1-b463-f0ad279d96bb.jpg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-light text-primary mb-4">
              Для любимой мамы
            </h1>
            <div className="flex items-center justify-center gap-3 text-accent">
              <Icon name="Heart" size={24} className="animate-pulse" />
              <p className="text-xl text-muted-foreground">С любовью от всей семьи</p>
              <Icon name="Heart" size={24} className="animate-pulse" />
            </div>
          </header>

          <Card className="overflow-hidden shadow-2xl border-2 border-primary/20 animate-scale-in">
            <div className="aspect-video bg-muted">
              <iframe
                src={`https://drive.google.com/file/d/${videoId}/preview`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </Card>

          {showGreeting && (
            <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/30 shadow-xl animate-fade-in">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl md:text-5xl font-light text-center text-primary mb-8">
                  Дорогая мамочка!
                </h2>
                
                <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
                  <p className="text-center font-light">
                    Сегодня особенный день — твой день! И мы хотим сказать тебе,
                    как сильно мы тебя любим и ценим.
                  </p>
                  
                  <p>
                    Спасибо за твою бесконечную заботу, за тёплые объятия, за мудрые советы 
                    и за то, что ты всегда рядом, когда нам это нужно. Ты делаешь наш дом 
                    уютным, наши сердца — теплыми, а нашу жизнь — яркой и наполненной счастьем.
                  </p>
                  
                  <p>
                    Ты — наш свет в окне, наша опора и вдохновение. Твоя улыбка способна 
                    изменить любой день к лучшему, а твоя любовь даёт нам силы для новых свершений.
                  </p>
                  
                  <p className="text-center font-semibold text-primary text-xl mt-8">
                    Желаем тебе крепкого здоровья, радости в каждом дне, 
                    исполнения всех желаний и бесконечного счастья!
                  </p>
                  
                  <div className="text-center mt-8 pt-8 border-t border-accent/30">
                    <p className="text-2xl font-light text-primary flex items-center justify-center gap-3">
                      Мы тебя очень-очень любим!
                      <Icon name="Sparkles" size={28} className="text-accent" />
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          <footer className="text-center py-8 text-muted-foreground animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Heart" size={20} className="text-accent" />
              <p className="text-sm">Сделано с любовью</p>
              <Icon name="Heart" size={20} className="text-accent" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}