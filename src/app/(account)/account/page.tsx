import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import userDataApi from "@/lib/apis/user-data.api";
import {
  GoalSchema,
  LevelSchema,
  WeightSchema,
  type GoalValue,
  type LevelValue,
  type WeightValue,
} from "@/lib/schemas/kyc.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@radix-ui/react-radio-group";
import {
  Globe,
  LifeBuoy,
  LoaderCircle,
  LogOut,
  Moon,
  RefreshCcw,
  Settings,
  ShieldAlert,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ErrorMessage from "@/components/shared/error-message";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEditGoal, useEditLevel, useEditWeight } from "../hooks/use-edit-profile";
import { activityLevels, goals } from "@/lib/constants/kyc.constant";
import NumberPicker from "@/components/ui/number-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/providers/theme-provider/theme.provider";
import { Link } from "react-router";
import NavBar from "@/components/shared/nav-bar";

export default function AccountPage() {
  // Translations
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Change language handler
  const changeLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
  };

  const { theme, setTheme } = useTheme();

  // User data array
  const [userData, setUserData] = useState<UserData | null>(null);

  // Edit user information queries
  const { editGoal, goalError, goalIsPending } = useEditGoal();
  const { editLevel, levelError, levelIsPending } = useEditLevel();
  const { editWeight, weightError, weightIsPending } = useEditWeight();

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      const data: ApiResponse<UserData> = await userDataApi();

      if ("user" in data) {
        const user = data.user as UserData;

        setUserData(user);
        console.log(user);
      }
    };

    fetchUserData();
  }, []);

  // Change goal form
  const goalForm = useForm<GoalValue>({
    defaultValues: { goal: userData?.goal || "" },
    resolver: zodResolver(GoalSchema),
  });

  //   Goal on submit function
  const goalOnSubmit = (value: GoalValue) => {
    editGoal(value);
  };

  // Change level form
  const levelForm = useForm<LevelValue>({
    defaultValues: { activityLevel: userData?.activityLevel || "" },
    resolver: zodResolver(LevelSchema),
  });

  //   Level on submit function
  const levelOnSubmit = (value: LevelValue) => {
    editLevel(value);
  };

  // Change weight form
  const weightForm = useForm<WeightValue>({
    defaultValues: { weight: userData?.weight ?? 90 },
    resolver: zodResolver(WeightSchema),
  });

  //   Weight on submit function
  const weightOnSubmit = (value: WeightValue) => {
    editWeight(value);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    location.href = "/login";
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/assets/toWEBP/auth-layout-bg.webp)]" />
      {/* Overlay with blur */}
      <div className="relative z-10 flex flex-col items-center min-h-screen backdrop-blur-[66px] bg-white/55 dark:bg-[#24242499]">
        {/* Content */}
        {/* Navbar */}
        <NavBar />
        {/* User data */}
        <div className="flex flex-col gap-10 lg:gap-20 md:flex-row mb-16 mt-10">
          {/* Goal */}
          <div className="text-center">
            <h1 className="capitalize font-Baloo text-5xl font-extrabold">{t("your-goal")}</h1>

            {/* Change goal dialog */}
            <Dialog>
              {/* <form> */}
              <DialogTrigger asChild>
                <DialogTitle>
                  <span className="text-lg cursor-pointer uppercase underline">
                    {t("tap-change")}
                  </span>
                </DialogTitle>
              </DialogTrigger>
              <DialogContent className="md:w-[425px] w-[360px] dark:bg-dark text-center">
                <DialogHeader>
                  <h1 className="capitalize font-extrabold md:text-5xl text-3xl mt-4 text-center font-Baloo">
                    {t("goal")}
                    <span className=" text-lg font-normal block mt-2">{t("help-us")}</span>
                  </h1>
                </DialogHeader>
                <Form {...goalForm}>
                  <form className="text-center" onSubmit={goalForm.handleSubmit(goalOnSubmit)}>
                    {/* Goal */}
                    <FormField
                      name="goal"
                      control={goalForm.control}
                      render={({ field }) => (
                        <FormItem>
                          {/* Field */}
                          <FormControl>
                            <RadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                              defaultValue="Gain weight"
                              className="mx-auto mt-10 text-dark dark:text-[#D3D3D3]"
                            >
                              {goals.map((goal) => (
                                <div
                                  key={goal.value}
                                  className="flex items-center justify-between gap-3 md:w-80 w-72 px-4 py-3 my-4 rounded-3xl border border-dark dark:border-[#D9D9D9] dark:bg-[#D3D3D333]/50"
                                >
                                  <Label htmlFor={goal.value}>{goal.label}</Label>
                                  <RadioGroupItem value={goal.value} id={goal.value} />
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>

                          {/* Feedback */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Error message */}
                    {goalError && <ErrorMessage message={goalError.message} />}

                    <Button
                      disabled={goalIsPending}
                      className="lg:w-[343px] capitalize text-white mt-4"
                    >
                      {t("change")}{" "}
                      {goalIsPending && <LoaderCircle className="animate-spin me-2" />}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
              {/* </form> */}
            </Dialog>

            <div className="flex justify-between mt-4 w-60 font-Baloo font-bold bg-main border border-dark dark:border-white rounded-3xl py-3 px-4">
              {userData?.goal} <RefreshCcw />{" "}
            </div>
          </div>

          {/* Level */}
          <div className="text-center">
            <h1 className="capitalize font-Baloo text-5xl font-extrabold">{t("your-level")}</h1>

            {/* Change level dialog */}
            <Dialog>
              {/* <form> */}
              <DialogTrigger asChild>
                <DialogTitle>
                  <span className="text-lg cursor-pointer uppercase underline">
                    {t("tap-change")}
                  </span>
                </DialogTitle>
              </DialogTrigger>
              <DialogContent className="md:w-[425px] w-[360px] dark:bg-dark text-center">
                <DialogHeader>
                  <h1 className="capitalize font-extrabold md:text-5xl text-3xl mt-4 text-center font-Baloo">
                    {t("level")}
                    <span className=" text-lg font-normal block mt-2">{t("help-us")}</span>
                  </h1>
                </DialogHeader>
                <Form {...levelForm}>
                  <form onSubmit={levelForm.handleSubmit(levelOnSubmit)}>
                    {/* Activity level */}
                    <FormField
                      name="activityLevel"
                      control={levelForm.control}
                      render={({ field }) => (
                        <FormItem>
                          {/* Field */}
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              defaultValue="level1"
                              className="mx-auto mt-10 text-dark dark:text-[#D3D3D3]"
                            >
                              {activityLevels.map((level) => (
                                <div
                                  key={level.value}
                                  className="flex items-center justify-between gap-3 md:w-80 w-72 px-4 py-3 my-4 rounded-3xl border border-dark dark:border-[#D9D9D9] dark:bg-[#D3D3D333]/50"
                                >
                                  <Label htmlFor={level.value}>{level.label}</Label>
                                  <RadioGroupItem value={level.value} id={level.value} />
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>

                          {/* Feedback */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Error message */}
                    {levelError && <ErrorMessage message={levelError?.message} />}

                    <Button
                      type="submit"
                      className="lg:w-[343px] capitalize text-white mt-4"
                      disabled={levelIsPending}
                    >
                      {t("change")}{" "}
                      {levelIsPending && <LoaderCircle className="me-2 animate-spin" size={16} />}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
              {/* </form> */}
            </Dialog>
            <div className="flex justify-between mt-4 w-60 font-Baloo font-bold bg-main border border-dark dark:border-white rounded-3xl py-3 px-4">
              {userData?.activityLevel} <RefreshCcw />{" "}
            </div>
          </div>

          {/* Weight */}
          <div className="text-center">
            <h1 className="capitalize font-Baloo text-5xl font-extrabold">{t("your-weight")}</h1>

            {/* Change weight dialog */}
            <Dialog>
              {/* <form> */}
              <DialogTrigger asChild>
                <DialogTitle>
                  <span className="text-lg cursor-pointer uppercase underline">
                    {t("tap-change")}
                  </span>
                </DialogTitle>
              </DialogTrigger>
              <DialogContent className="md:w-[425px] w-[360px] dark:bg-dark text-center">
                <DialogHeader>
                  <h1 className="capitalize font-extrabold md:text-5xl text-3xl mt-4 text-center font-Baloo">
                    {t("weight")}
                    <span className=" text-lg font-normal block mt-2">{t("help-us")}</span>
                  </h1>
                </DialogHeader>

                {/* </form> */}
                <Form {...weightForm}>
                  <form onSubmit={weightForm.handleSubmit(weightOnSubmit)}>
                    {/* Weight */}
                    <NumberPicker
                      name="weight"
                      control={weightForm.control}
                      unit={t("kg")}
                      min={35}
                      max={170}
                    />

                    {/* Error message */}
                    {weightError && <ErrorMessage message={weightError?.message} />}

                    <Button
                      type="submit"
                      className="lg:w-[343px] capitalize text-white mt-4"
                      disabled={weightIsPending}
                    >
                      {t("change")}{" "}
                      {weightIsPending && <LoaderCircle className="me-2 animate-spin" size={16} />}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            <div className="flex justify-between mt-4 w-60 font-Baloo font-bold bg-main border border-dark dark:border-white rounded-3xl py-3 px-4">
              {userData?.weight} <RefreshCcw />{" "}
            </div>
          </div>
        </div>
        {/* Operations */}
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-x-20 gap-x-10 gap-y-10 font-Baloo font-semibold text-lg capitalize mb-10">
          {/* Change password */}
          <Link
            to="/change-password"
            className="cursor-pointer flex flex-col gap-6 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28  rounded-2xl"
          >
            <RefreshCcw className="text-main" /> {t("change-password")}
          </Link>

          {/* Language */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer flex flex-col gap-1 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28 rounded-2xl">
                <Globe className="text-main" />
                {t("select-language")}
                <span className="text-main">
                  {currentLang.startsWith("en") ? t("english") : t("arabic")}
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 capitalize" align="start">
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                {t("english")}
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                {t("arabic")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mood */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer flex flex-col gap-1 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28 rounded-2xl">
                {theme === "dark" ? <Moon className="text-main" /> : <Sun className="text-main" />}
                {t("mode")}
                <span className="text-main capitalize">
                  {theme === "system" ? t("system") : theme === "dark" ? t("dark") : t("light")}
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 capitalize">
              <DropdownMenuItem onClick={() => setTheme("light")}>{t("light")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>{t("dark")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>{t("system")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Security */}
          <Link
            to="/account/security"
            className="flex flex-col gap-6 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28  rounded-2xl"
          >
            <Settings className="text-main" /> {t("security")}
          </Link>

          {/* Policy */}
          <Link
            to="/account/privacy-policy"
            className="flex flex-col gap-6 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28  rounded-2xl"
          >
            <ShieldAlert className="text-main" /> {t("policy")}
          </Link>

          {/* Help */}
          <Link
            to="/account/help"
            className="flex flex-col gap-6 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28  rounded-2xl"
          >
            <LifeBuoy className="text-main" /> {t("help")}
          </Link>

          {/* Logout */}
          <div
            onClick={logout}
            className="cursor-pointer col-span-2 lg:col-span-3 justify-self-center flex flex-col gap-6 justify-center items-center border border-dark dark:border-white md:w-52 md:h-40 w-40 h-28  rounded-2xl text-main"
          >
            <LogOut /> {t("logout")}
          </div>
        </div>
      </div>
    </div>
  );
}
