import {Box} from "./PathStyled"

const Path = (props) => {
    const {width, height, top=0, right=0, bottom=0, left=0} = props;
   
    return (
        <Box customStyle={{width, height,top, right, bottom, left}}/>
    ) 
}

export default Path;