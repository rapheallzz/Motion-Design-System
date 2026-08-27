import React, { useState } from 'react';
import {
  RippleButton,
  MagneticButton,
  PulseButton,
  GlowButton,
  ExpandingFAB,
  ShinyButton,
  HoldToConfirmButton,
  ParticleButton,
  SplitButton,
  ToggleIconButton,
  SkeletonLoader,
  Spinner3D,
  WaveLoader,
  ProgressRing,
  DotsLoader,
  ToastNotification,
  AlertBanner,
  SuccessCheckmark,
  ShimmerCard,
  CircularProgress,
  AnimatedModal,
  SlideDrawer,
  FloatingTooltip,
  PopoverCard,
  DropdownMenu,
  ContextMenu,
  CommandPalette,
  SheetMenu,
  SpotlightCard,
  HoverCard,
  AnimatedTabs,
  Breadcrumbs,
  BottomNavigation,
  AccordionGroup,
  SegmentedControl,
  Stepper,
  ScrollProgressBar,
  StickyHeader,
  FloatingNavbar,
  CollapsibleSidebar,
  AnimatedToggleSwitch,
  FloatingLabelInput,
  CheckboxAnimated,
  RadioGroupAnimated,
  RangeSliderAnimated,
  PinInputAnimated,
  SearchInputAnimated,
  MultiSelectTags,
  TypewriterText,
  FadeInText,
  WordsStaggerText,
  CounterAnimated,
  TextGlow,
  GlitchText,
  ScrambleText,
  WaveText,
  FlipCard,
  TiltCard,
  SwipeableCard,
  ExpandableCard,
  ParallaxCard,
  MorphingContainer,
  MagneticIcon,
  LikeButtonAnimated,
  ScratchCard,
  ReorderableList,
  AnimatedCarousel,
  AnimatedBadge,
  PulseDot,
  StarRating,
  FloatingElement,
  AnimatedCounterBadge,
  AvatarGroup,
  NotificationBell,
} from './index';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const categories = ['All', 'Buttons', 'Feedback', 'Overlays', 'Navigation', 'Inputs', 'Typography', 'Cards'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      <ScrollProgressBar />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl">
            ⚡
          </div>
          <div>
            <h1 className="font-bold text-lg text-white leading-none">Motion Design System</h1>
            <p className="text-xs text-slate-400 mt-0.5">60+ Animated Components & Design Tokens</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="http://localhost:6006"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity"
          >
            Launch Storybook →
          </a>
        </div>
      </header>

      {/* Hero & Category Tabs */}
      <main className="max-w-7xl mx-auto px-6 pt-10 space-y-10">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <AnimatedBadge label="VITE + REACT + FRAMER MOTION" count={60} />
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Production-Ready <TextGlow text="Motion Components" />
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore interactive spring physics, layout morphing, fluid gestures, and design token presets. Run <code className="text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">npm run storybook</code> for interactive docs.
          </p>
        </section>

        {/* Filter Navigation */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors ${
                  activeCategory === cat ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Component Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* BUTTONS */}
          {(activeCategory === 'All' || activeCategory === 'Buttons') && (
            <>
              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Ripple Button</h3>
                <RippleButton>Click For Ripple</RippleButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Magnetic Physics</h3>
                <MagneticButton>Hover Magnetic</MagneticButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Pulse Ring Button</h3>
                <PulseButton>Pulsing Action</PulseButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Gradient Glow</h3>
                <GlowButton>Glow Border</GlowButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Shiny Sweep</h3>
                <ShinyButton>Shiny Gradient</ShinyButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Hold To Confirm</h3>
                <HoldToConfirmButton onConfirm={() => alert('Action Confirmed!')}>
                  Hold to Confirm
                </HoldToConfirmButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Particle Burst</h3>
                <ParticleButton>Explode Particles</ParticleButton>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Split Button Menu</h3>
                <SplitButton
                  primaryLabel="Deploy"
                  onPrimaryClick={() => alert('Deployed')}
                  options={[
                    { label: 'Save Draft', onClick: () => alert('Draft Saved') },
                    { label: 'Export Config', onClick: () => alert('Config Exported') },
                  ]}
                />
              </SpotlightCard>
            </>
          )}

          {/* FEEDBACK */}
          {(activeCategory === 'All' || activeCategory === 'Feedback') && (
            <>
              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Skeleton Shimmer</h3>
                <div className="space-y-2">
                  <SkeletonLoader height={24} />
                  <SkeletonLoader variant="text" width="70%" />
                </div>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">3D Orbit Spinner</h3>
                <Spinner3D size={48} />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Wave Loader</h3>
                <WaveLoader count={5} />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Progress Ring</h3>
                <ProgressRing progress={82} size={80} />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Success Checkmark</h3>
                <SuccessCheckmark size={60} />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Toast Notification Trigger</h3>
                <button
                  onClick={() => setToastVisible(true)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-semibold hover:bg-slate-700 border border-slate-700"
                >
                  Show Toast Notification
                </button>
                <ToastNotification
                  isVisible={toastVisible}
                  onClose={() => setToastVisible(false)}
                  title="Motion System Alert"
                  description="Toast animated with bouncy spring parameters."
                  type="success"
                />
              </SpotlightCard>
            </>
          )}

          {/* OVERLAYS */}
          {(activeCategory === 'All' || activeCategory === 'Overlays') && (
            <>
              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Animated Spring Modal</h3>
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
                >
                  Open Modal
                </button>
                <AnimatedModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Interactive Modal">
                  <p className="text-sm">Smooth spring entry and backdrop blur overlay.</p>
                </AnimatedModal>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Slide Drawer</h3>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="px-4 py-2 bg-cyan-600 text-white rounded-xl text-xs font-semibold"
                >
                  Open Side Drawer
                </button>
                <SlideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Navigation Drawer">
                  <p className="text-sm text-slate-300">Slide drawer with fluid exit and enter transitions.</p>
                </SlideDrawer>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Command Palette</h3>
                <button
                  onClick={() => setCommandOpen(true)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold"
                >
                  Open Cmd + K Palette
                </button>
                <CommandPalette
                  isOpen={commandOpen}
                  onClose={() => setCommandOpen(false)}
                  items={[
                    { id: '1', label: 'View Documentation', category: 'General', onSelect: () => alert('Docs') },
                    { id: '2', label: 'Toggle Dark Theme', category: 'Settings', onSelect: () => alert('Theme') },
                  ]}
                />
              </SpotlightCard>
            </>
          )}

          {/* TYPOGRAPHY */}
          {(activeCategory === 'All' || activeCategory === 'Typography') && (
            <>
              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Typewriter Effect</h3>
                <TypewriterText text="Typing text effect..." className="text-sky-300 text-sm font-mono" />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Glitch Typography</h3>
                <GlitchText text="CYBERPUNK GLITCH" className="text-xl font-black" />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Text Scramble</h3>
                <div className="text-sm">
                  Hover to scramble: <ScrambleText text="SECRET_KEY_99" />
                </div>
              </SpotlightCard>
            </>
          )}

          {/* CARDS */}
          {(activeCategory === 'All' || activeCategory === 'Cards') && (
            <>
              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">3D Tilt Card</h3>
                <TiltCard className="p-4 bg-slate-950">
                  <h4 className="font-bold text-white text-sm">Interactive 3D Tilt</h4>
                  <p className="text-xs text-slate-400 mt-1">Calculates rotational offset based on cursor distance.</p>
                </TiltCard>
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Expandable Morph</h3>
                <ExpandableCard
                  title="Fluid Morph"
                  shortText="Layout auto transition."
                  fullText={<p className="text-xs text-slate-300">Smooth expansion using Framer Motion layout prop.</p>}
                />
              </SpotlightCard>

              <SpotlightCard>
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Animated Carousel</h3>
                <AnimatedCarousel
                  slides={[
                    { id: '1', content: <span className="font-bold text-sky-400">Slide 1: Spring Animation</span> },
                    { id: '2', content: <span className="font-bold text-purple-400">Slide 2: 60+ Components</span> },
                  ]}
                />
              </SpotlightCard>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
