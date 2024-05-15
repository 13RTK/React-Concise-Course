import { useForecastWeather } from "../../hooks/useForecastWeather";

import Loading from "../../ui/Loading";
import AppNav from "./AppNav";
import ForecastList from "./ForecastList";

function Forecast({ setIsHome, position }) {
  const { weatherForecastList, isLoading } = useForecastWeather(position);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <AppNav setIsHome={setIsHome} />

          <ForecastList weatherForecastList={weatherForecastList} />
        </>
      )}
    </>
  );
}
export default Forecast;
