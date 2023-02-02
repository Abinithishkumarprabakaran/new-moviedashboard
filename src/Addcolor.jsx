import { Button, TextField } from "@mui/material";
import { border } from "@mui/system";
import { useState } from "react";

export function AddColor() {  // named Export

    const [color, setColor] = useState('')

    const styles = {
        background: color
    }

    const [colorList, setcolorList] = useState(['crimson', 'orange', 'skyblue'])

    return (
        <div>
            <TextField
                style={styles}
                type="text" 
                onChange={(event) => setColor(event.target.value)}
                value={color}
            />
            {/* {color} */}
            <Button variant="contained" onClick={() => setcolorList([...colorList, color])}>
                Add Color
            </Button>
            {colorList.map((clr) => (
                <ColorBox color = {clr}/>
            ))}
        </div>
    )
}

function ColorBox({ color }) {
    const styles = {
        width: "250px",
        height: "25px",
        margin: "5px 0px",
        background: color,
    };
    return <div style={styles}></div>
}

// export {AddColor}   // At the bottom is the best practice