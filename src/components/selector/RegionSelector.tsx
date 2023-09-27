import { useMemo } from "react";
import { card, picOption } from "./regionSelector.module.css";
const RegionSelector = () => {
  const selectorData = useMemo(() => {
    return [
      {
        id: 1,
        label: "I'm flexible",
        imgUrl:
          "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
        value: undefined,
      },
      {
        id: 2,
        label: "Europe",
        imgUrl:
          "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
        value: "Europe",
      },
      {
        id: 3,
        label: "Japan",
        imgUrl:
          "https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320",
        value: "Japan",
      },
      {
        id: 4,
        label: "Southeast Asia",
        imgUrl:
          "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320",
        value: "Southeast Asia",
      },
      {
        id: 5,
        label: "United Kingdom",
        imgUrl:
          "https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320",
        value: "United Kingdom",
      },
      {
        id: 6,
        label: "Australia",
        imgUrl:
          "https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320",
        value: "Australia",
      },
    ];
  }, []);
  return (
    <div className={card}>
      <p className="text-sm mb-7">Search by region</p>
      <div className="grid grid-cols-3 gap-y-6 gap-x-1 w-fit">
        {selectorData.map(({id, imgUrl, label, value}) => (
          <label key={id} className={picOption}>
            <input type="radio" name="region" value={value} className="absolute invisible"/>
            {/* <div></div> */}
            <img src={imgUrl} alt={label} />
            <p>{label}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
