import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './style.css'

const Biography = () => {
    const { itemColor, textColor } = useContext(ThemeContext);
    return (
        <div className='biography' style={{backgroundColor: `${itemColor}`}}>
            <div className='bio-title'>
                <h2 style={{color: `${textColor}`}}>Biography</h2>
            </div>
            <p className='bio-little-title' style={{color: `${textColor}`}}>A little flash back of Marry Brown</p>
            <p className='bio-title-2' style={{color: `${textColor}`}}>Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat.</p>
            <p className='bio-title-3' style={{color: `${textColor}`}}>Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque, ut finibus ex. Quisque semper ornare magna, sed ullamcorper risus luctus quis. Etiam tristique dui vitae diam rutrum sodales. Mauris feugiat lectus felis, nec ullamcorper risus elementum at. Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt. Phasellus sed odio eu lacus venenatis.</p>
            <p className='bio-title-3' style={{color: `${textColor}`}}>Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.</p>
        </div>
    );
};

export default Biography;