import './Header.css';

function Header() {
    return (
        <div className="bg-black text-white flex justify-between items-center px-4 py-2">
            <p className="mx-auto">
                Sign up and get 50% off on your first order
            </p>

            <button className="ml-4">
                ✕
            </button>
        </div>
    );
}

export default Header;