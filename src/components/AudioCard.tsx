import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Menu,
  ArrowLeft,
  Timer,
  ChevronDown,
  SkipBack,
  SkipForward,
  Mic,
  BookOpen,
} from "lucide-react";
export const AudioCard = () => {
  const [showScript, setShowScript] = useState(false);
  const [showSleepTimer, setShowSleepTimer] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState<string | null>(null);
  const [showChapterSelect, setShowChapterSelect] = useState(false);
  const [showVoiceSelect, setShowVoiceSelect] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Male Voice 1");
  const [currentChapter, setCurrentChapter] = useState(5);
  const timerOptions = [
    "15 min",
    "30 min",
    "45 min",
    "60 min",
    "End of chapter",
  ];
  const voiceOptions = [
    "Male Voice 1",
    "Male Voice 2",
    "Female Voice 1",
    "Female Voice 2",
  ];
  const chapters = Array.from(
    {
      length: 12,
    },
    (_, i) => ({
      number: i + 1,
      title: `Chapter ${i + 1}`,
      duration: "45 min",
    })
  );
  const bookCover = "./images/Book_Cover/madol_duwa.jpg";
  const currentScript = `මඩොල් දූව කෙටි කතාව පටන් ගන්නේ කුඩා ගමක ජීවත් වන පවුලක කතාවකින්. ඒ පවුලේ සිටින්නේ අම්මා, තාත්තා සහ දියණියක්. ඔවුන් ජීවත් වන්නේ ඉතා දුෂ්කර ජීවිතයක්. දියණිය සෑම විටම පාසලට යන්නේ ඇගේ පියාගේ බයිසිකලයෙන්...`;
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
      className="relative w-[300px] h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-white"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bookCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px) brightness(0.7)",
          transform: "scale(1.1)",
        }}
      />
      <div className="relative z-10 h-full flex flex-col bg-white/80 backdrop-blur-sm">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 text-sm">Playing from Library</span>
          </div>
          <Menu className="w-5 h-5 text-gray-600" />
        </div>
        <div className="px-6 pt-4 pb-6">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={bookCover}
              alt="Book Cover"
              className="w-full h-full object-cover object-[30%_10%]"
            />
          </div>
        </div>
        <div className="px-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">මඩොල් දූව</h3>
          <p className="text-gray-600 text-sm">Martin Wickramasinghe</p>
        </div>
        <div className="px-6 mt-4 flex gap-4">
          <button
            onClick={() => setShowChapterSelect(!showChapterSelect)}
            className="flex-1 p-3 bg-gray-50 rounded-xl flex items-center justify-between hover:bg-gray-100 transition-colors border"
          >
            <span className="text-gray-900">Chapter {currentChapter}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform ${
                showChapterSelect ? "rotate-180" : ""
              }`}
            />
          </button>
          <button
            onClick={() => setShowScript(!showScript)}
            className={`flex-1 p-3 rounded-xl flex items-center justify-center gap-2 transition-colors border ${
              showScript
                ? "bg-[#3a5ef0] text-white border-[#3a5ef0]"
                : "bg-gray-50 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <span>Script</span>
            <BookOpen className="w-4 h-4" />
          </button>
        </div>
        <div className="px-6 mt-4">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-[65%] h-full bg-[#3a5ef0] rounded-full" />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">1:15:30</span>
            <span className="text-xs text-gray-600">-23:45</span>
          </div>
        </div>
        <div className="px-6 mt-4 flex items-center justify-between">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <SkipBack className="w-6 h-6" />
          </button>
          <button className="w-14 h-14 bg-[#3a5ef0] text-white rounded-full flex items-center justify-center hover:bg-[#2f4ce0] transition-colors">
            <Play className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>
        <div className="px-6 mt-4 flex items-center justify-between">
          <button
            onClick={() => setShowVoiceSelect(!showVoiceSelect)}
            className={`p-2 rounded-full transition-colors ${
              showVoiceSelect
                ? "text-[#3a5ef0]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowSleepTimer(!showSleepTimer)}
            className={`p-2 rounded-full transition-colors ${
              showSleepTimer
                ? "text-[#3a5ef0]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Timer className="w-5 h-5" />
          </button>
        </div>
        <AnimatePresence>
          {showScript && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              className="absolute inset-0 bg-white p-6 overflow-auto"
            >
              <button
                onClick={() => setShowScript(false)}
                className="mb-4 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Chapter {currentChapter} Script
              </h4>
              <p className="text-gray-600 leading-relaxed">{currentScript}</p>
            </motion.div>
          )}
          {showChapterSelect && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              className="absolute inset-x-4 top-20 bg-white rounded-xl shadow-lg p-4 z-10 border"
            >
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Select Chapter
              </h4>
              <div className="max-h-60 overflow-auto">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.number}
                    onClick={() => {
                      setCurrentChapter(chapter.number);
                      setShowChapterSelect(false);
                    }}
                    className={`w-full px-4 py-2 text-sm rounded-lg transition-colors text-left ${
                      currentChapter === chapter.number
                        ? "bg-[#3a5ef0] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>Chapter {chapter.number}</span>
                      <span className="text-xs opacity-75">
                        {chapter.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {showVoiceSelect && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="absolute bottom-20 left-4 right-4 bg-[#282828] rounded-xl shadow-lg p-4 z-10"
            >
              <h4 className="text-sm font-medium text-white mb-2">
                Select Voice
              </h4>
              <div className="space-y-2">
                {voiceOptions.map((voice) => (
                  <button
                    key={voice}
                    onClick={() => setSelectedVoice(voice)}
                    className={`w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                      selectedVoice === voice
                        ? "bg-[#3a5ef0] text-white"
                        : "text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {voice}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {showSleepTimer && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="absolute bottom-20 left-4 right-4 bg-[#282828] rounded-xl shadow-lg p-4 z-10"
            >
              <h4 className="text-sm font-medium text-white mb-2">
                Sleep Timer
              </h4>
              <div className="space-y-2">
                {timerOptions.map((timer) => (
                  <button
                    key={timer}
                    onClick={() => setSelectedTimer(timer)}
                    className={`w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                      selectedTimer === timer
                        ? "bg-[#3a5ef0] text-white"
                        : "text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {timer}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
