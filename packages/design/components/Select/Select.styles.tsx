import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
`;

export const NativeSelect = styled.select`
  width: 100%;
  padding: 12px 40px 12px 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #222;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #4f7cff;
    box-shadow: 0 0 0 3px rgba(79, 124, 255, 0.15);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const SelectArrow = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #777;
`;
