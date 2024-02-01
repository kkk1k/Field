import React from "react";
import styled from "styled-components";
import {Pagination, InputLabel, MenuItem, FormControl, Select} from "@mui/material";

function Dropdown() {
  return (
    <CustomFormControl variant='outlined' sx={{m: 1, minWidth: 350}}>
      <CustomInputLabel id='demo-simple-select-helper-label'>월간 필드</CustomInputLabel>
      <CustomSelect
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        onChange={handleMonthChange}
        value={monthField}
        label='월간 필드'
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          style: {
            left: "-8px", // 드롭다운의 왼쪽 위치를 조정
            top: "20px", // 드롭다운의 상단 위치를 조정 (필요한 경우)
          },
          getContentAnchorEl: null, // 드롭다운의 위치를 anchorOrigin에 맞게 조정하기 위해 필요할 수 있습니다.
        }}
      >
        <MenuItem value='1월'>1월</MenuItem>
        <MenuItem value='2월'>2월</MenuItem>
        <MenuItem value='3월'>3월</MenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
}

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
    padding-left: 20px;
  }
  .MuiSelect-icon {
    // 드롭다운 아이콘 스타일 변경
    color: white;
  }
`;
