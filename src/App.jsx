import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  ExternalLink,
  MapPin,
  Phone,
  Linkedin,
  Mail,
  ArrowRight,
  Instagram,
  Twitter,
} from 'lucide-react';

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // DATA: EDIT THIS LIST TO INSERT YOUR LINKS
  const portfolioItems = [
    {
      id: 1,
      platform: 'Instagram',
      link: 'https://www.instagram.com/p/DRhAfOLj5jl/',
      title: 'Cinematic Edit 01',
      category: 'Motion Graphics',
      // Placeholder abstract video
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764226628/A_company_called_Blockstream_has_launched_satellites_that_orbit_the_Earth_broadcasting_the_Bitc_grktmf.mp4',
    },
    {
      id: 2,
      platform: 'Instagram',
      link: 'https://www.instagram.com/reel/DFffwz5ThQG/',
      title: 'Visual Storytelling',
      category: 'Reels',
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764226993/Who_says_men_don_t_know_about_skincare_From_knowing_the_difference_between_lipstick_color_shades_ht0zfa.mp4',
    },
    {
      id: 3,
      platform: 'Instagram',
      link: 'https://www.instagram.com/reel/DE94-a4IpT0/',
      title: 'Color Grading',
      category: 'Showcase',
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764227109/Dominant_or_determined_Let_s_talk_about_why_women_s_leadership_is_often_misunderstood.___D_rmo1d1.mp4',
    },
    {
      id: 4,
      platform: 'Twitter',
      link: 'https://x.com/jasneet2003/status/1989570653029335477',
      title: 'Twitter Short',
      category: 'Fast Paced',
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764227247/96EKDFbrNXvo7eBK_olstqf.mp4',
    },
    {
      id: 5,
      platform: 'Instagram',
      link: 'https://www.instagram.com/p/DQzNnMHDBYx/',
      title: 'Trend Edit',
      category: 'Viral Style',
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764226972/Bitcoin_Altcoin_Stablecoin_explained._These_are_the_classification_of_cryptocurrencies_that_h_aic7mp.mp4',
    },
    {
      id: 6,
      platform: 'Instagram',
      link: 'https://www.instagram.com/p/DPx5dlvj5Wn/',
      title: 'Dynamic Cuts',
      category: 'Commercial',
      videoUrl:
        'https://res.cloudinary.com/dkfgg3oqc/video/upload/v1764226976/get_ecs2it.mp4',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* --- HEADER --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
            J
          </div>
          <span className="font-bold text-lg tracking-tight">
            Jasneet Saini
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
          <span>Portfolio for</span>
          <span className="bg-white text-black px-3 py-1 rounded-full font-bold">
            anshmehra
          </span>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="max-w-3xl z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
              <MapPin size={14} />
              <span>Ready to relocate to Gurugram</span>
              <span className="w-1 h-1 rounded-full bg-blue-400 mx-2"></span>
              <span>In-Office Ready</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Crafting Visual Impact.
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
              I'm Jasneet Singh Saini, a video editor specializing in
              high-retention content for social platforms. Curating frames that
              stop the scroll.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
              >
                <Play size={18} fill="currentColor" /> View Work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right 3D Element */}
          <div className="relative w-full md:w-1/2 h-[400px] flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>

            {/* 3D Floating Element - Using a 3D Abstract Shape Image */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
              alt="3D Abstract Art"
              className="relative w-full h-full object-contain animate-float drop-shadow-2xl opacity-90"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
        </div>
      </header>

      {/* --- PORTFOLIO GRID --- */}
      <section id="work" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold">Selected Works</h2>
          <span className="text-neutral-500 text-sm hidden md:block">
            Hover to preview &middot; Click to view post
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-20 bg-neutral-900 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Create Together
          </h2>
          <p className="text-neutral-400 mb-12">
            I am available immediately for full-time opportunities at
            <span className="text-white font-bold mx-1">anshmehra</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Contact Card 1 */}
            <div className="bg-neutral-950 p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors group">
              <div className="h-10 w-10 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <h3 className="text-neutral-400 text-sm font-medium mb-1">
                Phone
              </h3>
              <p className="text-lg font-bold text-white">+91 96445 43903</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-neutral-950 p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors group">
              <div className="h-10 w-10 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <h3 className="text-neutral-400 text-sm font-medium mb-1">
                Address
              </h3>
              <p className="text-lg font-bold text-white leading-tight">
                22 Vishnupuri Colony Main, Indore, MP 452001
              </p>
            </div>

            {/* Contact Card 3 */}
            <a
              href="https://www.linkedin.com/in/jasneet2003"
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-950 p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors group cursor-pointer"
            >
              <div className="h-10 w-10 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <h3 className="text-neutral-400 text-sm font-medium mb-1">
                LinkedIn
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-white">View Profile</p>
                <ArrowRight size={16} className="text-blue-400" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-white/5 bg-neutral-950">
        <p>
          &copy; {new Date().getFullYear()} Jasneet Singh Saini. Created for
          anshmehra.
        </p>
      </footer>

      {/* CSS for custom float animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Sub-component for individual video cards to handle hover state cleanly
const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            if (error.name !== 'AbortError') {
              console.log('Playback error:', error);
            }
            setIsPlaying(false);
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-[9/16] bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {item.platform === 'Twitter' ? (
            <Twitter size={14} className="text-blue-400" />
          ) : (
            <Instagram size={14} className="text-pink-500" />
          )}
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            {item.platform}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-neutral-400">{item.category}</p>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
          <ExternalLink size={24} className="text-white" />
        </div>
      </div>
    </a>
  );
};

export default Portfolio;
