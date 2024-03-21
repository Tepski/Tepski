<div className="flex flex-row h-full w-full">
  <div className="relative h-full w-full flex justify-center items-center">
    <animated.div style={props}>
      <div
        className="z-10 p-2 bg-secondary rounded-3xla self-start rounded-2xla relative"
        ref={imageRef}
      >
        <img
          src={Image}
          className="xl:h-[330px] 2xl:h-[380px] w-auto rounded-xla"
          alt=""
        />
      </div>
      {/* <div className="h-full w-[300px] right-24 bg-black absolute z-0"></div> */}
    </animated.div>
  </div>
  <div className="bg-background h-full w-full justify-center flex py-4 px-10 flex-col">
    {imageInView && (
      <animated.div style={textAnimate}>
        <p className="2xl:text-5xl xl:text-4xl text-text lg:text-3xl md:text-2xl pl-8 sm:text-base text-whitea font-semibold">
          Who am I?
        </p>
        <p className="text-whitea 2xl:text-2xl xl:text-lg lg:text-base text-text md:text-md text-start sm:text-xs my-4 border-l-4 border-l-primary px-3">
          I was born in Zambales, Philippines, and I am a Registered Mechanical
          Engineer with a passion for designing innovative solutions. Alongside
          my engineering background, I have developed a strong interest in web
          and mobile development, teaching myself through various projects.
        </p>
        <p className="text-whitea 2xl:text-2xl xl:text-lg lg:text-base text-text md:text-md sm:text-xs xs:text-[8px] text-start border-l-4 border-l-primary px-3">
          I am currently seeking new opportunities to apply my skills and
          continue learning in a collaborative and innovative environment.
          #HireMePlease
        </p>
      </animated.div>
    )}
  </div>
</div>;
