import React, { useState, useMemo} from "react";
import "./index.sass";

const colors = ['#f55d42', '#f5dd42', '#f5429e', '#42f569', '#03f8fc' ];

const Title = () => {
    const [color, setColor] = useState(colors[0]);
    
    const style = useMemo(() => {
        return { color };
    }, [color])

    const handleHover = () => {
        const rand =  Math.random() * (4 + 1);
        const index = Math.floor(rand);
        setColor(colors[index]);
    }

    console.log('render');

  return (
    <h1 className="title" style={style} onMouseOver={handleHover}>Todo App</h1>

  );
};

export default Title;
