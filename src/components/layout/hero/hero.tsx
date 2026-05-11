// import ScrollingTicker from "@/components/shared/scrolling-ticker";
// import "../../../index.css";
// import { toLocalizedNumber } from "@/lib/utils/format-number";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import AiChat from "@/components/shared/ai";
// import { cn } from "../../../lib/utils";
// import NavBar from "@/components/shared/nav-bar";

// export default function Hero() {
//   // Translation
//   const { i18n, t } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   const locale = isRTL ? "ar-EG" : "en-US";

//   //   Variables
//   const stats = [
//     { number: 1200, label: "activeMembers" },
//     { number: 12, label: "certifiedTrainers" },
//     { number: 20, label: "yearsExperience" },
//   ];

//   // State
//   const [openAiChat, setOpenAiChat] = useState(true);

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Background Image */}
//       <img
//         src="/assets/toWEBP/hero-background.webp"
//         alt="Hero Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Frosted Overlay */}
//       <div className="absolute inset-0 bg-white/60 dark:bg-CharcoalGray/60 backdrop-blur-[86px]"></div>

//       {/* Content Wrapper */}
//       <div className="z-10 relative flex flex-col min-h-screen">
//         {/* Navbar */}
//         <NavBar />
//         {/* Main Content */}
//         <div className="relative flex lg:flex-row flex-col flex-1 justify-between items-center gap-8 lg:gap-12 mx-auto py-10 pb-0 w-11/12">
//           {/* Text Section */}
//           <div className="z-20 w-full lg:w-1/2 lg:max-w-2xl text-left">
//             <h1 className="font-Baloo font-extrabold text-CharcoalGray dark:text-white text-4xl sm:text-5xl lg:text-6xl rtl:text-start leading-tight lg:leading-20">
//               {t("heroTitle1")} <span className="text-main">{t("heroTitle2")}</span>{" "}
//               {t("heroTitle3")}
//             </h1>

//             <p className="mt-6 ps-4 border-main border-s-4 max-w-xl font-Rubik text-CharcoalGray dark:text-white text-base sm:text-lg lg:text-xl rtl:text-start">
//               {t("heroDescription")}
//             </p>

//             {/* Stats */}
//             <div className="flex sm:flex-row flex-col justify-start items-start sm:items-center gap-8 sm:gap-12 lg:gap-20 my-12 lg:my-16 dark:text-white">
//               {stats.map((item, idx) => (
//                 <div key={idx} className="flex flex-col items-start lg:items-start">
//                   <h2
//                     className={`text-xl sm:text-2xl font-bold mb-1.5 flex items-start ${isRTL ? "flex-row-reverse" : "flex-row"}`}
//                   >
//                     <span className="mx-1">{toLocalizedNumber(item.number, locale)}</span>
//                     <span>+</span>
//                   </h2>
//                   <p className="text-sm sm:text-base">{t(item.label)}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             {/* <div className="flex lg:flex-row flex-col flex-wrap lg:justify-start lg:items-center gap-4 sm:gap-6 lg:gap-8 mt-8 mb-12 lg:mb-0">
//               <IconButton
//                 text={t("getStarted")}
//                 bgColor="bg-main w-fit"
//                 className="font-semibold text-sm sm:text-base"
//               />

//               <IconButton
//                 text={t("exploreMore")}
//                 bgColor="bg-transparent"
//                 className="hover:bg-main border border-main w-fit font-semibold text-main hover:text-white text-sm sm:text-base transition"
//               />
//             </div> */}
//           </div>

//           {/* Image Section */}
//           <div className={`relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end `}>
//             <img
//               src="/assets/toWEBP/hero.webp"
//               alt="Muscle Man"
//               className={`
//                 object-contain
//                 select-none
//                 pointer-events-none
//                 w-[280px]
//                   h-auto
//                 sm:w-[340px]
//                 md:w-[400px]
//                 lg:w-[468px]
//                 lg:h-[720px]
//               `}
//             />

//             {/* AI Chatbot */}
//             <div
//               className={cn(
//                 "hidden lg:block top-28 right-20 absolute transition-all rtl:-translate-x-80 duration-300",
//                 {
//                   "top-[28] -right-12": openAiChat,
//                 },
//               )}
//             >
//               {!openAiChat && (
//                 <div className="flex flex-col items-center">
//                   <img
//                     className="z-50 w-36 -translate-y-40 cursor-pointer"
//                     src="/assets/toWEBP/close-ai.webp"
//                     alt="Close ai chatbot"
//                     onClick={() => setOpenAiChat((prev) => !prev)}
//                   />
//                   <AiChat />
//                 </div>
//               )}

//               {openAiChat && (
//                 <img
//                   className="z-50 translate-y-108 cursor-pointer"
//                   src="/assets/toWEBP/open-ai.webp"
//                   onClick={() => setOpenAiChat((prev) => !prev)}
//                   alt="Open ai chatbot"
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         <ScrollingTicker />
//       </div>
//     </div>
//   );
// }


import ScrollingTicker from "@/components/shared/scrolling-ticker";
import "../../../index.css";
import { toLocalizedNumber } from "@/lib/utils/format-number";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AiChat from "@/components/shared/ai";
// import { cn } from "../../../lib/utils";
import NavBar from "@/components/shared/nav-bar";

export default function Hero() {
  // Translation
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";
  const locale = isRTL ? "ar-EG" : "en-US";

  // Variables
  const stats = [
    { number: 1200, label: "activeMembers" },
    { number: 12, label: "certifiedTrainers" },
    { number: 20, label: "yearsExperience" },
  ];

  // State - false = chat مغلق، true = chat مفتوح
  const [openAiChat, setOpenAiChat] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/assets/toWEBP/hero-background.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Frosted Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-CharcoalGray/60 backdrop-blur-[86px]"></div>

      {/* Content Wrapper */}
      <div className="z-10 relative flex flex-col min-h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <div className="relative flex lg:flex-row flex-col flex-1 justify-between items-center gap-8 lg:gap-12 mx-auto py-10 pb-0 w-11/12">
          
          {/* Text Section */}
          <div className="z-20 w-full lg:w-1/2 lg:max-w-2xl text-left">
            <h1 className="font-Baloo font-extrabold text-CharcoalGray dark:text-white text-4xl sm:text-5xl lg:text-6xl rtl:text-start leading-tight lg:leading-20">
              {t("heroTitle1")}{" "}
              <span className="text-main">{t("heroTitle2")}</span>{" "}
              {t("heroTitle3")}
            </h1>

            <p className="mt-6 ps-4 border-main border-s-4 max-w-xl font-Rubik text-CharcoalGray dark:text-white text-base sm:text-lg lg:text-xl rtl:text-start">
              {t("heroDescription")}
            </p>

            {/* Stats */}
            <div className="flex sm:flex-row flex-col justify-start items-start sm:items-center gap-8 sm:gap-12 lg:gap-20 my-12 lg:my-16 dark:text-white">
              {stats.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start lg:items-start">
                  <h2
                    className={`text-xl sm:text-2xl font-bold mb-1.5 flex items-start ${
                      isRTL ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span className="mx-1">
                      {toLocalizedNumber(item.number, locale)}
                    </span>
                    <span>+</span>
                  </h2>
                  <p className="text-sm sm:text-base">{t(item.label)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end">
            <img
              src="/assets/toWEBP/hero.webp"
              alt="Muscle Man"
              className="object-contain select-none pointer-events-none w-[280px] h-auto sm:w-[340px] md:w-[400px] lg:w-[468px] lg:h-[720px]"
            />

            {/* AI Chatbot */}
       <div className="hidden lg:block absolute top-28 right-20 transition-all duration-300 rtl:-translate-x-80">
  
  {openAiChat && (
    <div className="flex flex-col items-center">
      <img
        className="z-50 w-36 -translate-y-40 cursor-pointer"
        src="/assets/toWEBP/close-ai.webp"
        alt="Close ai chatbot"
        onClick={() => setOpenAiChat(false)}
      />
      <AiChat />
    </div>
  )}

  {!openAiChat && (
    <img
      className="z-50 translate-y-108 cursor-pointer"
      src="/assets/toWEBP/open-ai.webp"
      onClick={() => setOpenAiChat(true)}
      alt="Open ai chatbot"
    />
  )}

</div>
          </div>
        </div>

        <ScrollingTicker />
      </div>
    </div>
  );
}