const About = () => {
  return (
    <section className="wrapper text-center">
      <h2 className="inline-block text-[2rem] font-bold mb-[60px] text-center border-b border-solid border-primary mx-auto pb-4">
        About
      </h2>
      <div className="flex justify-center items-center">
        <img
          src="/about.jpg"
          alt=""
          className="w-[100px] h-[100px] rounded-[50%] mr-[30px]"
        />
        <div className="text-left">
          <h3 className="text-[1rem] my-[10px] font-bold">
            KAKERU MIYAICHI
          </h3>
          <p className="leading-7 text-[0.9rem]">
            テキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
