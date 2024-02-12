interface CurrentData {
    dt: number;
    main: {
        temp: number;
    }
    weather: [
        {
            main: string;
            icon: string;
        }
    ]
    wind: {
        speed: number
    }
}


interface FiveDaysData {
    list: {
        [key: number]: {
            dt_txt: string;
            main: {
                temp: number;
            }
            weather: [
                {
                    main: string;
                    description: string;
                    icon: string;
                }
            ]
            wind: {
                speed: number;
            }
        }
    }
    cod: number
}

