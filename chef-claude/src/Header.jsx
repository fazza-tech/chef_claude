import logo from './images/chef-claude-icon.png'
export default function Header(){
    
    return(
        <header>
            <img 
            src={logo} 
            alt="logo"
            />
            <h1>Chef Claude</h1>
        </header>
    )
}