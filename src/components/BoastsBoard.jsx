//자랑게시판
import React from 'react';
import BoardList from './Board/BoardList';
import BoardDetail from './Board/BoardDetail';

const JarangBoard = () => {
	return (
		<div>
			<div className="h-screen bg-[#FEDF78] p-28">
				<p className="font-Point text-point text-2xl mb-10">자랑 게시판</p>
				<BoardList boardType={'boasts'}>
					<BoardDetail />
				</BoardList>
			</div>
		</div>
	);
};

export default JarangBoard;
