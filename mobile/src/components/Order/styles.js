import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #ddddddcc;
  border-radius: 8px;
  margin-bottom: 28px;
  position: relative;
`;

export const Steps = styled.View`
  padding: 22px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Line = styled.View`
  background-color: #7d40e7;
  width: 220px;
  height: 1px;
  position: absolute;
  top: 64px;
  left: 42px;
  margin: 0 auto;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  padding: 8px 22px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Step = styled.View`
  width: 60px;
  align-items: center;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.fill ? '#7d40e7' : '#ffffff')};
  border: 1px solid #7d40e7;
  border-radius: 5px;
  margin-bottom: 6px;
`;

export const StepText = styled.Text`
  color: #999999;
  font-size: 8px;
  text-align: center;
`;

export const Informations = styled.View`
  background-color: #f8f9fd;

  border: 1px solid #eee;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  flex-direction: row;
  justify-content: space-between;

  padding: 8px 22px;
`;

export const DateInfo = styled.View`
  padding: 6px 0;
`;

export const LabelDate = styled.Text`
  color: #999999;
  font-size: 10px;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: #444444;
  font-size: 12px;
  font-weight: bold;
`;

export const CityInfo = styled.View`
  padding: 6px 0;
`;

export const LabelCity = styled.Text`
  color: #999999;
  font-size: 10px;
  font-weight: bold;
`;

export const City = styled.Text`
  color: #444444;
  font-size: 12px;
  font-weight: bold;
`;

export const Details = styled.View`
  padding: 6px 0;
  justify-content: flex-end;
`;

export const ButtonText = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
`;
