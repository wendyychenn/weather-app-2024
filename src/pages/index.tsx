import Current from '@/components/Current';
import FiveDay from '@/components/FiveDay';
import { SetStateAction, useState } from 'react';

export default function Home() {

  const [city, setCity] = useState("");

  const urlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=69caa19bf5933a201c1df70621967a50`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69caa19bf5933a201c1df70621967a50`;

  const [data, setData] = useState<CurrentData[]>([]);
  const [fiveDayData, setFiveDayData] = useState<FiveDaysData[]>([]);

  const inputData = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCity(event.target.value)
  };

  const GetCurrentInfo = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData([data]);
      })

    //five days
    fetch(urlDays)
      .then((res) => {
        return res.json();
      })
      .then((fiveDayData) => {
        console.log(fiveDayData);
        setFiveDayData([fiveDayData]);
      })
  }

  return (
    <main className={`flex min-h-screen flex-col`}>
      <header style={{padding: '3rem', textAlign: 'end', color: '#0E6CAA', fontWeight: 'bold' }}>
        <input value={city} onChange={inputData} style={{ padding: '0.2rem 0rem 0.2rem 0.6rem', borderRadius: '0.5rem 0rem 0rem 0.5rem'}} />
        <button type='submit' onClick={() => GetCurrentInfo()} style={{ padding: '0.2rem 1rem 0.2rem 1rem', borderRadius: '0rem 0.5rem 0.5rem 0rem', backgroundColor: '#D599BD', color: 'white' }}>Go</button>
      </header>
      <Current data={data} />
      <FiveDay data={fiveDayData} />
      <footer style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '1rem 4rem', marginTop: '4rem', textAlign: 'end', color: '#eec090', fontWeight: 'bold' }}>
        <p>Created by Wendy</p>
      </footer>
    </main>
  )
}
