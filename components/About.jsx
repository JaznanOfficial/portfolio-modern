import Image from "next/image";
import { motion } from "framer-motion";
// components
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#E5F8FF] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/own.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">3+</div>
                  <div className="leading-none text-center">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText
                text="My Name is Md Abdur Rahman"
                textStyles="h2 mb-2"
              />
              <p className="text-lg">
                Founder, Full-Stack Developer, and SaaS Entrepreneur
              </p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              As a passionate founder and tech innovator, I specialize in
              creating scalable SaaS platforms and impactful digital solutions.
              With expertise in modern web technologies and a strong focus on
              user-centered design, I turn complex ideas into streamlined,
              functional applications. Explore my portfolio to see how I blend
              technical precision with entrepreneurial vision to deliver
              transformative products.
            </p>

            {/* info items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-start justify-start">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Location</div>
                <p>Khulna, Bangladesh</p>
              </div>
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>+8801764343294 (whatsapp)</p>
              </div>
              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>mail@lantabur-softech.com</p>
              </div>
              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">
                  Languages
                </div>
                <p>Bengali, English, Urdu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
