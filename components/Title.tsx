import React, { FC } from 'react';

interface ITitle {
	title: string;
}

const Title: FC<ITitle> = ({ title }) => {
	return <h2>{title}</h2>;
};

export default Title;
