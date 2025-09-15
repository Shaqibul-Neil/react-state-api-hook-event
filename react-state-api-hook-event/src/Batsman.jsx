import { useState } from 'react';

const Batsman = () => {
  //let lastBatsmanScore; তুমি এটাকে সাধারণ ভ্যারিয়েবল হিসেবে ব্যবহার করছো, কিন্তু React re-render হলে এটা reset হয়ে যাচ্ছে। তাই <h5>Last Batsman score: {lastBatsmanScore}</h5> সবসময় undefined বা অদ্ভুত দেখাবে। React এ render এ দেখানোর জন্য ডেটা state (বা কখনো ref) এ রাখতে হয়।
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(null);
  const [sixes, setSixes] = useState(0);
  const [out, setOut] = useState(0);
  const [total, setTotal] = useState(0);

  const handleScore = () => {
    if (out >= 10) {
      alert(`😥😥😥😥 All Out 😥😥😥😥`);
      return;
    }

    const newRun = Math.ceil(Math.random() * 6);

    if (newRun === 5 && out < 10) {
      alert(`Player Out!`);
      setLastScore(score); //// আউট হলে আগের স্কোর ধরে রাখব
      setScore(0); //score reset
      setOut(prevOut => {
        const updatedOut = prevOut + 1;
        //jodi out 10 hoe jai tahole sathe sathe return krbe
        if (updatedOut === 10) {
          alert(`😥😥😥😥 All Out 😥😥😥😥`);
        }
        //out hole r run jog hbena
        return updatedOut;
      });
      return;
    }
    //other case e run add hbe
    if (out < 10) {
      setScore(prevScore => prevScore + newRun);
      setTotal(prevScore => prevScore + newRun);
      //if hit a 6
      if (newRun === 6) {
        alert(`🥳🥳🥳🥳 You hit a 6️⃣ 🥳🥳🥳🥳`);
        setSixes(prevSix => prevSix + 1);
      }
      return;
    }
  };
  return (
    <div className="counter">
      <h3>Player : BD</h3>
      <h4>Run: {score}</h4>
      <div className="flex">
        <h4>Total: {total}</h4>
        <h4>Out: {out}</h4>
        <h5>Number of Sixes: {sixes}</h5>
      </div>
      <h5>Last Batsman score: {lastScore !== null ? lastScore : ''} </h5>
      <button onClick={handleScore}>Run</button>
    </div>
  );
};
export default Batsman;
