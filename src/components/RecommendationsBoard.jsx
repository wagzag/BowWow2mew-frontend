// 추천 플레이스
import React from 'react';
import BoardList from './Board/BoardList';
import BoardDetail from './Board/BoardDetail';

const RecommendationsBoard = () => {
	return (
		<div>
			<div className="h-screen bg-[#FEDF78] p-28">
				<p className="font-Point text-point text-2xl mb-10">추천 Place</p>
				<BoardList boardType={'recommendations'}>
					<BoardDetail />
				</BoardList>
			</div>
		</div>
	);
};

export default RecommendationsBoard;
