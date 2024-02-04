import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {InputLabel, MenuItem, FormControl, Select} from "@mui/material";

function Dropdown({label, menuItemList}) {
  const [dropDownValue, setDropDownValue] = useState("");
  const handleValueChange = event => {
    setDropDownValue(event.target.value);
  };

  return (
    <CustomFormControl variant='outlined' sx={{m: 1, minWidth: 350}}>
      <CustomInputLabel id='demo-simple-select-helper-label'>{label}</CustomInputLabel>
      <CustomSelect
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        onChange={handleValueChange}
        value={dropDownValue}
        label={label}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          style: {
            left: "0.5rem", // 드롭다운의 왼쪽 위치를 조정
            top: "1.25rem", // 드롭다운의 상단 위치를 조정 (필요한 경우)
          },
          getContentAnchorEl: null, // 드롭다운의 위치를 anchorOrigin에 맞게 조정하기 위해 필요할 수 있습니다.
        }}
      >
        {menuItemList.map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </CustomSelect>
    </CustomFormControl>
  );
}
// Prop types 선언, 보다 구체적인 타입 사용
Dropdown.propTypes = {
  label: PropTypes.string, // 'value' prop의 타입을 string으로 변경 (예시)
  menuItemList: PropTypes.arrayOf(PropTypes.string), // 'menuItemList'는 문자열의 배열로 변경 (예시)
};

// defaultProps 선언
Dropdown.defaultProps = {
  label: "", // 'value'의 기본값은 빈 문자열로 설정
  menuItemList: [], // 'menuItemList'의 기본값은 빈 배열로 설정
  // 'onChange'는 필수 prop이므로 defaultProps가 필요 없습니다.
};

export default Dropdown;

const CustomFormControl = styled(FormControl)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white; // 테두리 색상을 하얀색으로 변경
    }
    &:hover fieldset {
      border-color: white; // 호버 시 테두리 색상을 하얀색으로 변경
    }
    &.Mui-focused fieldset {
      border-color: white; // 포커스 시 테두리 색상을 하얀색으로 변경
      color: white;
    }
  }
`;

const CustomInputLabel = styled(InputLabel)`
  &.MuiInputLabel-root {
    color: white; // 원하는 색상으로 변경
  }
`;

const CustomSelect = styled(Select)`
  .MuiSelect-select {
    // Material UI 내부 클래스에 스타일 적용
    color: white;
    padding-left: 1.25rem;
  }
  .MuiSelect-icon {
    // 드롭다운 아이콘 스타일 변경
    color: white;
  }
`;
