import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../store/atoms/text';

const Input: React.FC = () => {

    const [text, setText] = useRecoilState(textState);


    return <input type="text" value={text} onChange={e => setText(e.target.value)} />;
}

export default Input;