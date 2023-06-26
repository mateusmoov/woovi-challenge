import React, { useState } from "react";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  RadioProps,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { PriceBoxProps, LabelProps } from "./PriceBox.types";
import { HorizontalVBanner } from "@/components";

export const PriceBox = ({ data, subtitleColor = "#AFAFAF" }: PriceBoxProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const RadioPrice = (props: RadioProps) => {
    return (
      <Radio
        name="radio-buttons"
        checkedIcon={<CheckRoundedIcon sx={{ fontSize: 14, color: "white" }} />}
        {...props}
        sx={{
          width: "20px",
          height: "20px",
          "&.Mui-checked": {
            backgroundColor: "#03D69D",
          },
        }}
      />
    );
  };

const LabelStyle = ({ title, subtitle, textBanner }: LabelProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "8px",
          marginTop: "20px",
          marginBottom: "22px",
        }}
      >
        <span style={{ fontSize: "24px" }}>{title}</span>
        <span style={{ color: subtitleColor, fontSize: "16px" }}>
          {subtitle}
        </span>
        <div style={{
          marginTop: '7px'
        }}>
          {textBanner && <HorizontalVBanner>{textBanner}</HorizontalVBanner>}
        </div>
      </div>
    </div>
  );
};

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup name="use-radio-group" sx={{ display: "inline-flex" }}>
      {data.map((item, index) => (
        <FormControlLabel
          key={index}
          value={item.value}
          label={<LabelStyle title={item.title} subtitle={item.subtitle} textBanner={item.textBanner} />}
          control={<RadioPrice />}
          labelPlacement="start"
          sx={{
            border: `2px solid ${
              selectedValue === item.value ? "#03D69D" : "#E5E5E5"
            }`,
            backgroundColor: selectedValue === item.value ? "#F4FBF9" : "white",
            minWidth: "429px",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            marginLeft: "-16px",
            zIndex: selectedValue === item.value ? 10 : 0,
            marginTop: "-2px",
            "&:first-of-type": {
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            },
            "&:last-of-type": {
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }
          }}
          onChange={(event) =>
            handleRadioChange(event as React.ChangeEvent<HTMLInputElement>)
          }
        />
      ))}
    </RadioGroup>
  );
};