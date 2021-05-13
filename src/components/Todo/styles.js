import styled from "styled-components";

export const ContainerTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  background-color: teal;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  width: 100px;
  height: 30px;
`;

export const ContainerButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
`;

export const MainContainer = styled.div`
  margin-right: 10px;
  padding: 10px;
`;

export const TodoText = styled.h2`
  color: gray;
  font-size: 16px;
  width: 400px;
`;
