const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img 
              src="/assets/logo.png"
              alt="AirCrop Logo" 
              width="55" 
              height="50"
            />
            <span className="text-[#F6FAF9] font-['Saira'] text-2xl">AIRCROP</span>
          </div>
    );
}

export default Logo;