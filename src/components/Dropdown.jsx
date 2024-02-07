import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {InputLabel, MenuItem, FormControl, Select} from "@mui/material";

function Dropdown({label, menuItemList, onChange, value}) {
  const handleValueChange = event => {
    onChange(event.target.value); // 부모 컴포넌트로 선택된 값을 전달
  };
  return (
    <CustomFormControl variant='outlined'>
      <CustomInputLabel id='demo-simple-select-helper-label'>{label}</CustomInputLabel>
      <CustomSelect
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        onChange={handleValueChange}
        value={value}
        label={label}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

// defaultProps 선언
Dropdown.defaultProps = {
  label: "", // 'value'의 기본값은 빈 문자열로 설정
  menuItemList: [], // 'menuItemList'의 기본값은 빈 배열로 설정
  value: "",
};

export default Dropdown;

const CustomFormControl = styled(FormControl)`
  && {
    min-width: 100%; /* 또는 다른 값을 적용하세요 */
  }
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
  }
  .MuiSelect-icon {
    // 드롭다운 아이콘 스타일 변경
    color: white;
  }
`;
