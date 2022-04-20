import React from 'react';
import '../Css/Home.css'

export const Home = () =>
{
    return(<>
        <div className='onebanner'>
           <h2> Save More When You Gift More 15% Off 4 | 20% Off 6+</h2>
        </div>
        {/* <div className='main1'>
            <div className='main1-child1'>
                <h3>
                SAY HELLO TO
                </h3>
                <h2>
                    Moments With Mom
                </h2>
                <div className='line'></div>
                <h4>
                    Just like mom, Tervis drinkware is dependable, beutiful and won't leave rins on the furniture
                </h4>
                <button className='momshop'>
                    Shop for Mom
                </button>
            </div>
            <div className='main1-child2'>
                <img src='https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dw570b501d/images/homepage/2022/hpg-mothersday-hero-040422.jpg' />
            </div>
        </div> */}
        <div >
            <div>
                <img src='https://marvel-b1-cdn.bc0a.com/f00000000077703/www.tervis.com/on/demandware.static/-/Sites-Tervis-Library/default/dwc2380740/images/homepage/2021/sp-classic-030121.png' />            
            </div>
            <div>
                <span className='pheading'>Shop Classoc</span>
                <span className='pdetails'>The drinkware that started it all</span>
            </div>            
        </div>
    </>)
}