import React from "react";
import { useState } from "react";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import CircleLoader from "react-spinners/CircleLoader";
import API from "../../lib/api";
import CityBox from "../../components/CityBox";
import "./style.less";

interface ISearchContainerProps {}
const SearchContainer: React.FC<ISearchContainerProps> = () => {
  const [t] = useTranslation();

  const [touch, setTouch] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResult] = useState<any[]>([]);

  const searchForLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      fetchData(e.target.value);
    }
  };

  const fetchData = debounce((value: string) => {
    setTouch(true);
    setLoading(true);
    setResult([]);
    const api = new API();
    api
      .searchLocation({
        query: value,
      })
      .then(results => {
        setLoading(false);
        setResult(results);
      });
  }, 1000);
  return (
    <div className={"container middle center column"}>
      <h1 className={"search-title"}>{t("Search")}</h1>
      <input type="text" placeholder={"Berlin"} className={"search-input"} onChange={searchForLocation} />
      <div className={"search-result container middle center space-between"}>
        <div className="spinner">
          <CircleLoader color={"#ff6369"} loading={loading} />
          {touch && !loading && results.length === 0 && <h5>{t("There is no result!")}</h5>}
        </div>
        {results.map(city => (
          <CityBox key={city.woeid} city={city} />
        ))}
      </div>
    </div>
  );
};
export default SearchContainer;
