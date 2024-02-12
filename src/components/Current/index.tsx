export default function Current(
    props: { data: CurrentData[] }
) {
    if (!props.data?.length) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.75)', margin: '10rem 18rem', padding: '6rem 2rem', borderRadius: '1rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#7C6AA8' }}>Find The Weather</h1>
                <p style={{ fontSize: '1.3rem' }}>1. Enter a Location</p>
                <p style={{ fontSize: '1.3rem' }}>2. Find the City's Current Weather and a 6-Day-Forecast</p>

            </div>
        )
    }

    return (
        <>
            {
                props.data && props.data.map(({
                    dt,
                    main,
                    weather,
                    wind
                }: CurrentData, index: number) => {

                    const date = new Date(dt * 1000);

                    const formattedDate = date.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    });

                    const convertToCelcius = main.temp - 273.15;

                    const weatherIcons = {
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

                    const weatherIconCode = weather[0].icon;
                    const weatherIcon = weatherIcons[weatherIconCode];

                    const iconSrc = weatherIcon ? `/images/${weatherIcon}.png` : ''; 

                    return (
                        <div key={index} style={{ margin: '2rem 0rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
                            <div style={{ fontSize: '2.8rem' }}>
                                {formattedDate}</div>

                            <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'center', margin: '2rem 0rem' }}>

                                <img style={{ width: 190, height: 190 }}
                                    src={iconSrc} />

                                <div style={{ display: 'flex', flexDirection: 'column' }}>

                                    <div style={{ fontSize: '4rem' }}>
                                        {convertToCelcius.toFixed(1)}°C</div>

                                    <div style={{ fontSize: '1.5rem' }}>
                                        {weather[0].main}</div>

                                    <div>Wind Speed: {wind.speed}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}