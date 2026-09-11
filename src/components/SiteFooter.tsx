import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-grid">
          <div>
            <BrandLogo />
            <p>
              Better technology. A better everyday.
              <br />
              Custom PCs, connected businesses, and support that stays with you.
            </p>
            <a className="text-link" href="#contact">
              Let’s build something great <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#gaming">Gaming PCs</a>
            <a href="#laptops">Laptops</a>
            <a href="#business">Business systems</a>
            <a href="#upgrades">Parts & upgrades</a>
          </div>
          <div>
            <h3>How we help</h3>
            <a href="#repair">Repairs & diagnostics</a>
            <a href="#networking">Networking</a>
            <a href="#voip">Phone & VoIP</a>
            <a href="#surveillance">Security & surveillance</a>
          </div>
          <div>
            <h3>Let’s connect</h3>
            <a href="#contact">
              Request a quote <ArrowUpRight size={14} />
            </a>
            <a href="#about">Our approach</a>
            <a href="#faq">Common questions</a>
            <span className="footer-note">
              For your home. For your business.
              <br />
              For whatever comes next.
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Premium Computer System. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
