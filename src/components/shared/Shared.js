import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const OuterDiv = styled.div`
	width: 50%;
	margin: 10px auto;
	background-color: white;
	border-radius: 10px;
	border: 2px solid #fccd04;
`;

export const HeaderDiv = styled.div`
	font-weight: bold;
	font-size: 20px;
	background-color: #fccd04;
	padding: 10px;
	color: black;
	border-radius: 10px 10px 0 0;
`;

export const DetailDiv = styled.div`
	display: flex;
	padding: 10px;
`;

export const AppButton = styled.button`
	width: 100%;
	background-color: #5a5560;
	color: white;
	border: none;
	padding: 5px;
	border-radius: 5px;
	margin: 10px 0;
`;

export const TotalScore = styled.div`
	text-align: center;
	padding: 10px;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #fccd04;
`;
