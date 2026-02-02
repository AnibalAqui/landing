"use client";

import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";

const mails = ["business@abelardo-aqui-arroyo.dev", "anibalitoaqui@gmail.com"];

const ContactSection = (prop: { style?: string }) => {
  return (
    <div
      className={
        "flex flex-row gap-3 justify-center " +
        (prop.style !== undefined ? prop.style : "")
      }
    >
      <a
        href={`mailto:${mails.join()}`}
        className="relative border border-pink-600/90 bg-pink-700/60  rounded-lg px-1 my-0.5 cursor-pointer flex flex-row gap-1 items-center"
      >
        <span className="absolute -top-1.5 -left-2 inline-flex size-3 rounded-full bg-green-500">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        </span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p className="text-white font-medium">Mail</p>
      </a>
      <button className="relative border border-pink-600/90 bg-pink-700/60  rounded-lg px-1 my-0.5 cursor-pointer flex flex-row gap-1 items-center">
        <span className="absolute -top-1.5 -left-2 inline-flex size-3 rounded-full ">
          <svg
            className=" text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </span>

        <a
          className="text-white font-medium"
          href="https://www.linkedin.com/in/anibal-aqui/"
        >
          Anibal
        </a>
      </button>
      <button className="relative border border-pink-600/90 bg-pink-700/60  rounded-lg px-1 my-0.5 cursor-pointer flex flex-row gap-1 items-center">
        <span className="absolute -top-1.5 -left-2 inline-flex size-3 rounded-full ">
          <svg
            className="text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Z" />
            <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
            <path d="M12 12v3" />
          </svg>
        </span>

        <a
          className="text-white font-medium"
          target="_blank"
          href="https://abelardo-aqui-arroyo.dev"
        >
          Abel
        </a>
      </button>
    </div>
  );
};

export default function Home() {
  const handleCopy = async () => {
    const textToCopy =
      "Hello Chat. Role: Act as a Sports Nutritionist specialized in Body Composition and Exercise Physiology. Your goal is to design a recomposition strategy (fat loss and muscle gain) adapted to my daily reality. My Profile Data User: Healthy [GENDER], [AGE] years old. Anthropometry: Weight [WEIGHT] kg, Height [HEIGHT] cm. Visual references: T-shirt size [SHIRT SIZE], pants size [PANTS SIZE]. (I am attaching a photo as a reference for current body fat percentage.) Physical Activity: Strength training [NUMBER] times per week, [DURATION] per session. Average of [STEPS] steps per day. Work Context Occupation: [INSERT OCCUPATION HERE, e.g., Construction Worker, Data Analyst, Surgeon, etc.] Analysis Instructions occupation affects my metabolism. Differentiate between a sedentary job with high mental load and a physically demanding job. Recomposition Plan: Calculate calories and macronutrient distribution (protein, fats, carbohydrates) specific to my goal of losing fat without sacrificing muscle. Food Logistics: Recommend how to organize my meals based on my type of work (e.g., limited time to eat, need for constant energy, long periods standing or sitting). Training and Recovery: Adjust recommendations for weight training volume or intensity considering the physical fatigue from my workday. Suggested Supplementation: Evidence-based recommendations according to my profile and activity level. Output Format Present the information in a structured format, using tables for numerical data (calories/macros) and a list of practical tips applicable to my daily work routine";
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 to-violet-700 ">
      <div className="flex flex-col bg-size-[32px_32px] bg-[radial-gradient(#808080_1px,transparent_1px)]">
        <div className="px-3 lg:px-60 mt-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 text-center">
            The <br />
            <span
              className="inline-block text-5xl lg:text-6xl font-bold
      bg-linear-to-r from-purple-500 to-pink-600
      bg-clip-text text-transparent"
            >
              Glow-up Prompt
            </span>
          </h1>
          <ContactSection style="mt-10" />
        </div>
        <div className="h-16 bg-linear-to-t from-white to-transparent mt-5"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-5 px-10 md:px-60 bg-white ">
          <BeforeAfterSlider
            beforeImage="glow-up-abelardo-aqui-arroyo-before.jpeg"
            afterImage="glow-up-abelardo-aqui-arroyo-after.jpeg"
            beforeLabel="BEFORE"
            afterLabel="AFTER"
          />
          <div className="text-purple-500 flex flex-col gap-3 justify-center items-center">
            <p className="text-2xl font-bold">
              We engineered our own glow-up. <br />
              Now We build systems that do the same for businesses.
            </p>
            <p className="text-black text-xl">
              We are web developers who apply the same discipline and systems
              that transformed our bodies to build high-performing digital
              products..
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage="glow-up-abelardo-aqui-arroyo-before.jpeg"
            afterImage="glow-up-abelardo-aqui-arroyo-after.jpeg"
            beforeLabel="BEFORE"
            afterLabel="AFTER"
            className="lg:hidden"
          />
          <div className="text-purple-500 flex flex-col gap-3 justify-center items-center">
            <p className="text-2xl font-bold">Principles</p>
            <ul className="text-black list-inside text-xl">
              <li>· Progressive Overload. </li>
              <li>· Always Trying To Improve. </li>
              <li>· Feedback Loops.</li>
              <li>· Consistency</li>
            </ul>
          </div>
          <BeforeAfterSlider
            beforeImage="glow-up-anibal-aqui-before.jpeg"
            afterImage="glow-up-anibal-aqui-after.jpeg"
            beforeLabel="BEFORE"
            afterLabel="AFTER"
            className="hidden lg:block"
          />
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-10">
            <h3 className="text-purple-600 text-2xl text-center font-medium">
              The Prompt That Started Everything
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 grid grid-cols-10 border border-gray-700">
              <div className="col-span-9">
                <p className="text-justify font-mono text-sm text-gray-100 leading-relaxed line-clamp-6  ">
                  <span className="font-bold">Hello Chat.</span>
                  <br />
                  <span className="font-bold">Role:</span> Act as a Sports
                  Nutritionist specialized in Body Composition and Exercise
                  Physiology. Your goal is to design a recomposition strategy
                  (fat loss and muscle gain) adapted to my daily reality. <br />
                  My Profile Data User: Healthy [GENDER], [AGE] years old.
                  <br /> <span className="font-bold">Anthropometry: </span>
                  Weight [WEIGHT] kg, Height [HEIGHT] cm.
                  <br />
                  <span className="font-bold"> Visual references: </span>{" "}
                  T-shirt size [SHIRT SIZE], pants size [PANTS SIZE]. (I am
                  attaching a photo as a reference for current body fat
                  percentage.) <br />
                  <span className="font-bold">Physical Activity: </span>
                  Strength training [NUMBER] times per week, [DURATION] per
                  session. Average of [STEPS] steps per day. <br />
                  <span className="font-bold">Work Context Occupation: </span>
                  [INSERT OCCUPATION HERE, e.g., Construction Worker, Data
                  Analyst, Surgeon, etc.] <br />
                  <span className="font-bold">
                    Analysis Instructions Energy Expenditure Evaluation (TDEE):
                  </span>
                  Analyze how my occupation affects my metabolism. Differentiate
                  between a sedentary job with high mental load and a physically
                  demanding job. <br />
                  <span className="font-bold">Recomposition Plan: </span>
                  Calculate calories and macronutrient distribution (protein,
                  fats, carbohydrates) specific to my goal of losing fat without
                  sacrificing muscle.
                  <br /> <span className="font-bold">Food Logistics: </span>
                  Recommend how to organize my meals based on my type of work
                  (e.g., limited time to eat, need for constant energy, long
                  periods standing or sitting). <br />
                  <span className="font-bold">Training and Recovery: </span>
                  Adjust recommendations for weight training volume or intensity
                  considering the physical fatigue from my workday. <br />{" "}
                  <span className="font-bold">Suggested Supplementation: </span>
                  Evidence-based recommendations according to my profile and
                  activity level. Output Format Present the information in a
                  structured format, using tables for numerical data
                  (calories/macros) and a list of practical tips applicable to
                  my daily work routine.
                </p>
              </div>
              <div className="col-span-1 justify-self-end">
                <button
                  className="bg-purple-700/50 border border-purple-700 rounded-sm px-3 cursor-pointer"
                  onClick={handleCopy}
                >
                  <span className="text-white font-bold">Copy</span>
                </button>
              </div>
            </div>
            <h3 className="text-purple-600 text-2xl text-center font-medium">
              How Can We Help You
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-3 items-center">
                <p className="text-pink-400 font-bold text-center">
                  Consultation
                </p>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-20 bg-linear-to-r from-purple-500 to-pink-600 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                <p className="text-white font-medium px-8">
                  We discuss your vision, needs and budget to understand your
                  dream application.
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-3 items-center">
                <p className="text-pink-400 font-bold text-center">Desing</p>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-20 bg-linear-to-r from-purple-500 to-pink-600 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
                <p className="text-white font-medium  px-10">
                  We create detailed plans and layouts for your approval.
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-3 items-center">
                <p className="text-pink-400 font-bold text-center">
                  Development
                </p>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-20 bg-linear-to-r from-purple-500 to-pink-600 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <p className="text-white font-medium px-10">
                  We take the design to life with precision.
                </p>
              </div>
              <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-3 items-center">
                <p className="text-pink-400 font-bold text-center">
                  Your Product
                </p>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-20 bg-linear-to-r from-purple-500 to-pink-600 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                <p className="text-white font-medium px-10">
                  Experience the joy of your own application.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 bg-linear-to-t from-transparent to-white"></div>
        <ContactSection style="py-10" />
      </div>
    </main>
  );
}
