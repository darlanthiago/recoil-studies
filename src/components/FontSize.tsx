import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeState } from '../store/atoms/fontSize';
import { fontSizeLabel } from '../store/selectors/fontSize';


const FontSize: React.FC = () => {

    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontLabel = useRecoilValue(fontSizeLabel);

    return (
        <div>
            <button type="button" onClick={() => setFontSize(fontSize + 1)}>+</button>
            <span>{fontLabel}</span>
            <button type="button" onClick={() => setFontSize(fontSize - 1)}>-</button>
        </div>
    );
}

export default FontSize;