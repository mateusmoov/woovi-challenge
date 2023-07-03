import React, { useState } from "react";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  RadioProps,
  Box,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { PriceBoxProps, LabelProps } from "./PriceBox.types";
import { HorizontalVBanner } from "@/components";
import styles from "./PriceBox.module.css";

export const PriceBox = ({
  data,
  subtitleColor = "#AFAFAF",
}: PriceBoxProps) => {
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
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box display="flex" flexDirection="column" ml="8px" mt="20px" mb="22px">
          <span style={{ fontSize: "24px" }}>{title}</span>
          <span style={{ color: subtitleColor, fontSize: "16px" }}>
            {subtitle}
          </span>
          <Box mt="7px">
            {textBanner && <HorizontalVBanner>{textBanner}</HorizontalVBanner>}
          </Box>
        </Box>
      </Box>
    );
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
      <RadioGroup name="use-radio-group" sx={{ display: "inline-flex", width: "100%" }}>
        {data.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            label={
              <LabelStyle
                title={item.title}
                subtitle={item.subtitle}
                textBanner={item.textBanner}
              />
            }
            control={<RadioPrice />}
            labelPlacement="start"
            className={styles.radio_box}
            sx={{
              border: `2px solid ${
                selectedValue === item.value ? "#03D69D" : "#E5E5E5"
              }`,
              backgroundColor:
                selectedValue === item.value ? "#F4FBF9" : "white",
              zIndex: selectedValue === item.value ? 10 : 0,
            }}
            onChange={(event) =>
              handleRadioChange(event as React.ChangeEvent<HTMLInputElement>)
            }
          />
        ))}
      </RadioGroup>
  );
};
