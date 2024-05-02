import axios from "axios";

export default function TripAdvisor(app) {

    const getAirports = async (req, res) => {

        const options = {
            method: 'GET',
            url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
            params: { query: req.params.search },
            headers: {
                'X-RapidAPI-Key': '57ba4df950msh7c718251e0b1735p162b19jsn8fc729eb5660',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            res.json(response.data);
        } catch (error) {
            console.error("getAirports:", error);
        }
    }

    app.get("/api/airports/:search", getAirports);
}