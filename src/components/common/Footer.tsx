import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black border-t mt-8 py-8 text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1: Logo, slogan, contact, social */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold text-white">HomeShare</div>
            <div className="italic text-gray-300">Kết nối không gian, sẻ chia cuộc sống</div>
            <div>
              <span className="font-semibold">Điện thoại:</span> <a href="tel:0123456789" className="hover:text-blue-400 transition-color">0123 456 789</a>
            </div>
            <div>
              <span className="font-semibold">Email:</span> <a href="mailto:info@homeshare.vn" className="hover:text-blue-400 transition-color">info@homeshare.vn</a>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="transition-transform hover:scale-110 text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="transition-transform hover:scale-110 text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="Tiktok" className="transition-transform hover:scale-110 text-white">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>
          {/* Cột 2, 3: Để trống hoặc thêm nội dung sau */}
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
