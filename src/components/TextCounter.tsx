import React from 'react';
import { useRecoilValue } from 'recoil';
import { fontSizeState } from '../store/atoms/fontSize';
import { charCount, charToUpper } from '../store/selectors/text';


const TextCounter: React.FC = () => {
    const count = useRecoilValue(charCount);
    const upperText = useRecoilValue(charToUpper);
    const fontSize = useRecoilValue(fontSizeState);

    return (
        <>
            <h2 style={{ fontSize }}>Upper: {upperText}</h2>
            <h3 style={{ fontSize }}>Tamanho da String: {count}</h3>
        </>
    );
}

export default TextCounter;