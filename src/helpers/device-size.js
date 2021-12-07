export const isMobile = () => {
    const deviceSize = window.innerWidth;
    if( deviceSize >= 992 ){
        return false;
    }
    else{
        return true;
    }
}