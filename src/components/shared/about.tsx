// import IconButton from "@/components/shared/buttton-with-arrow";
import Title from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { Dumbbell, MoveUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen xl:max-h-[820px] overflow-hidden font-Baloo">
      <div className="absolute inset-0 bg-[url(/assets/toWEBP/about.webp)] bg-cover bg-center" />
      {/* Overlay with blur */}
      <div className="z-10 relative flex flex-col bg-light/55 dark:bg-dark/60 backdrop-blur-[66px] min-h-screen text-dark dark:text-light">
        {/* Content */}

        <div className="flex xl:flex-row flex-col-reverse gap-20 mx-4 my-10 xl:my-20">
          {/* Left side images */}
          <div className="relative xl:w-1/2">
            <div className="flex justify-center items-start gap-5">
              <img
                src="/assets/toWEBP/about-gray.webp"
                alt="Man 1"
                className="rounded-2xl w-52 md:w-[360px] h-80 md:h-[540px]"
              />
              <img
                src="/assets/toWEBP/about-black.webp"
                alt="Man 2"
                className="mt-6 lg:mt-10 rounded-2xl w-32 md:w-56 h-24 md:h-44"
              />
            </div>

            <div
              className={cn(
                "absolute",
                "start-48 sm:start-72 md:start-96 lg:start-[520px] xl:start-[450px]",
                "top-30 md:top-12 lg:top-44 xl:top-56",
                " md:top-80",
              )}
            >
              <img
                src="/assets/toWEBP/about-blue.webp"
                alt="Man 3"
                className="rounded-2xl w-48 md:w-[350px] h-64 md:h-[490px]"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="xl:w-1/2">
            <Title icon={<Dumbbell width={30} height={24} />} title={t("about-us")} />

            {/* Descriptions */}
            <div>
              <p className="my-6 font-bold md:text-[40px] text-xl uppercase">
                {t("about-title1")} <span className="text-main">{t("about-subtitle")} </span>
                {t("about-subtitle2")}
              </p>

              <p className="text-md">{t("about-content")}</p>
            </div>

            {/* Instructions */}
            <div>
              <div className="md:flex justify-center items-center gap-6 mt-16 pb-8 border-b border-b-gray-600 dark:border-b-secondary">
                <div className="">
                  <div className="flex items-center gap-4 font-bold capitalize">
                    <MoveUpRight className="text-main" /> {t("personal-trainer")}
                  </div>

                  <p className="mt-4 text-lg">{t("personal-trainer-desc")}</p>
                </div>

                <div className="mt-6 md:mt-0">
                  <div className="flex items-center gap-4 font-bold capitalize">
                    <MoveUpRight className="text-main" /> {t("cardio-programs")}
                  </div>

                  <p className="mt-4 text-lg">{t("cardio-programs-desc")}</p>
                </div>
              </div>

              <div className="md:flex justify-center items-center gap-6 mt-8">
                <div className="">
                  <div className="flex items-center gap-4 font-bold capitalize">
                    <MoveUpRight className="text-main" /> {t("quality-equipment")}
                  </div>

                  <p className="mt-4 text-lg">{t("quality-equipment-desc")}</p>
                </div>

                <div className="mt-6 md:mt-0">
                  <div className="flex items-center gap-4 font-bold capitalize">
                    <MoveUpRight className="text-main" />
                    {t("healthy-nutrition")}
                  </div>

                  <p className="mt-4 text-lg">{t("healthy-nutrition-desc")}</p>
                </div>
              </div>

              {/* To about page button */}
              {/* <IconButton
                text={t("get-started")}
                bgColor="bg-main "
                className="mt-8 w-fit capitalize"
                href="/about"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
