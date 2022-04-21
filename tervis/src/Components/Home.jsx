import React from 'react';
import '../Css/Home.css';
import { Nav } from './Nav';

export const Home = () =>
{
    return(<>             
        <Nav />        
        <div className='onebanner'>
           <h2> Save More When You Gift More 15% Off 4 | 20% Off 6+</h2>
        </div>        
        <div className='mhproduct'>
            <div className='mhproduct1'>
                <div>
                    <img src='https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dwc2380740/images/homepage/2021/sp-classic-030121.png' />            
                </div>
                <div className='hpdetails'>
                    <span className='pheading'>Shop Classoc</span><br/>
                    <span className='pdetails'>The drinkware that started it all</span>
                </div>            
            </div>
            <div className='mhproduct1'>
                <div>
                    <img src='https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw2a7ff477/images/homepage/2021/sp-stainless-030121.png' />            
                </div>
                <div className='hpdetails'>
                    <span className='pheading'>Shop Stainless</span><br/>
                    <span className='pdetails'>Bold and durable</span>
                </div>            
            </div>
            <div className='mhproduct1'>
                <div>
                    <img src='https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw8327b23d/images/homepage/2021/sp-customyzer-030121@2x.png' />            
                </div>
                <div className='hpdetails'>
                    <span className='pheading'>Customize Now</span><br/>
                    <span className='pdetails'>As unique as you</span>
                </div>            
            </div>
        </div>
    </>)
}