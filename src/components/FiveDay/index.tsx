
export default function FiveDay(
    props: { data: FiveDaysData[] }
) {
    if (!props.data?.length) {
        return (
            <div>

            </div>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '3rem', color: 'white', fontSize: '2rem' }}>Five Day Forecast</h1>

            {
                props.data && props.data.map(({
                    list,
                }: FiveDaysData, index: number) => {

                    const fiveDayForecast = [0, 7, 15, 23, 31];

                    return (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>



                            {fiveDayForecast.map((d, innerIndex) => {

                                const date = new Date(list[d].dt_txt);

                                const formattedDate = date.toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                });

                                const convertToCelcius = list[d].main.temp - 273.15;

                                const weatherIcons: { [key: string]: string } = {
                                    '10d': 'rain',
                                    '10n': 'rain',
                                    '13d': 'snow',
                                    '13n': 'snow',
                                    '02d': 'cloudy',
                                    '02n': 'cloudy',
                                    '03d': 'cloudy',
                                    '03n': 'cloudy',
                                    '04d': 'cloudy',
                                    '04n': 'cloudy',
                                    '01d': 'clear',
                                    '01n': 'clear',
                                    '11d': 'thunder',
                                    '09d': 'drizzle',
                                    '50n': 'rain'
                                }

                                const weatherIconCode = list[d].weather[0].icon;
                                const weatherIcon = weatherIcons[weatherIconCode];

                                const iconSrc = weatherIcon ? `/images/${weatherIcon}.png` : '';

                                return (

                                    <div key={innerIndex} style={{ margin: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: '1.5rem', borderRadius: '0.5rem', display:'flex', flexDirection:'column',alignItems:'center' }}>
                                        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#7C6AA8' }}>{formattedDate}</div>
                                        <div style={{ fontSize: '3rem', textAlign: 'center', marginTop: '1rem' }}>{convertToCelcius.toFixed(1)} °C</div>
                                        <img style={{ width: 100, height: 100 }}
                                            src={iconSrc} />
                                        <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '0.75rem 0rem' }}>{list[d].weather[0].main}</div>
                                        <div>{list[d].weather[0].description.charAt(0).toUpperCase() + list[d].weather[0].description.slice(1)}</div>
                                        <div>Wind Speed: {list[d].wind.speed}</div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })
            }
        </>
    )
}









// return (
//     <>
//         {
//             props.data && props.data.map(({
//                 list,
//                 cod
//             }: FiveDaysData, index: number) => {

//                 const fiveDayForecast = [0, 7, 15, 23, 31];

//                 const date = new Date(list[d].dt_txt * 1000);

//                 const formattedDate = date.toLocaleDateString('en-US', {
//                     month: 'long', // Full month name (e.g., "January")
//                     day: 'numeric', // Day of the month (e.g., "1")
//                     year: 'numeric' // Four-digit year (e.g., "2023")
//                   });

//                 return (
//                     <div key={index} style={{ margin: '15px' }}>
//                         <div>
//                             {fiveDayForecast.map((d, innerIndex) => (
//                                 <div key={innerIndex}>
//                                     <div>{formattedDate}</div>
//                                     <div>{list[d].main.temp.toFixed(1)}</div>
//                                     <div>{list[d].weather[0].main}</div>
//                                     <div>{list[d].weather[0].description}</div>
//                                     <div>{list[d].wind.speed}</div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div>{cod}</div>
//                     </div>
//                 );
//             })
//         }
//     </>
// )
// }