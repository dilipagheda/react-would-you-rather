import styled from 'styled-components';

export const OuterDiv = styled.div`
	background-color: white;
	border-radius: 12px;
	border: 2px solid #fccd04;
	padding: 0;
	margin: 20px auto;
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

export function sort(questions, idsToSort) {
	return Object.values(questions)
		.sort((a, b) => b.timestamp - a.timestamp)
		.filter((a) => idsToSort.includes(a.id))
		.map((a) => a.id);
}
