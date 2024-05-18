const Bicycle = () => {
  return (
    <section className="wrapper text-center">
      <h2 className="inline-block text-[2rem] font-bold mb-[60px] text-center border-b border-solid border-primary mx-auto pb-4">
        Bicycle
      </h2>
      <ul className="flex justify-between">
        <li className="w-[32%]">
          <img src="/bicycle1.jpg" alt="" />
          <h3 className="mt-[30px] font-bold">タイトルタイトル</h3>
          <p className="mt-[20px] ">テキストテキストテキスト</p>
        </li>
        <li className="w-[32%]">
          <img src="/bicycle2.jpg" alt="" />
          <h3 className="mt-[30px] font-bold">タイトルタイトル</h3>
          <p className="mt-[20px] ">テキストテキストテキスト</p>
        </li>
        <li className="w-[32%]">
          <img src="/bicycle3.jpg" alt="" />
          <h3 className="mt-[30px] font-bold">タイトルタイトル</h3>
          <p className="mt-[20px] ">テキストテキストテキスト</p>
        </li>
      </ul>
    </section>
  )
}

export default Bicycle
