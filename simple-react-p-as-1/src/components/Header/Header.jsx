
import CricketLogo from '../../assets/images/cricket-logo.png'
import './Header.css'
import { TbCoinRupeeFilled } from "react-icons/tb";
const Header = ({coin}) => {
    
  
    return (
        <div className='flex justify-between mx-13 '>
            <div>
                <img className='nav-logo' src={CricketLogo} alt="" />
            </div>
            <div className='flex gap-10 p-12 list-none'>
                <li className='text-2xl'>Home</li>
                <li className='text-2xl'>Team</li>
                <li className='text-2xl'>Players</li>
                <div className='-mt-6 flex justify-center'>
                    <li className='text-2xl border-2 p-6 flex items-center gap-2'>
                        {coin} Coin
                        <TbCoinRupeeFilled className="text-4xl text-yellow-400" />
                    </li>
                </div>
                
            </div>
        </div>
    );
};

export default Header;