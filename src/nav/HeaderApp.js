import { NavLink } from "react-router-dom";
import "./HeaderApp.css"
export const HeaderApp = () => {
    function getNavClass(navLinkProps){
        let navClass = 'app-header-item';
        if (navLinkProps.isActive) navClass += ' app-header-item-active';
        return navClass;
    }
return (
    <div className='app-header'>
        <NavLink className={getNavClass} to="/">Home</NavLink>
        <NavLink className={getNavClass} to="/Showdata">Data-info</NavLink>
        <NavLink className={getNavClass}to="/information">form-info</NavLink>
    </div>
  )
}
