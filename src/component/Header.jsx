import './Header.css';

function Header() {
    return (
        <div className="bg-black text-white text-center text-sm py-2 flex justify-center items-center relative">
      <p>
        Sign up and get 20% off to your first order. 
        <span className="underline ml-1 cursor-pointer">Sign Up Now</span>
      </p>
      <span className="absolute right-4 cursor-pointer">✕</span>
    </div>
    );
}

export default Header;