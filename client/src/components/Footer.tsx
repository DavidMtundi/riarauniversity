export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">Schools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-business">Business</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-education">Education</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-engineering">Engineering</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-humanities">Humanities & Sciences</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-law">Law</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-medicine">Medicine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-sustainability">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">Departments</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-registrar">Office of the Registrar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-financial">Financial Aid</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-undergraduate">Undergraduate Admission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-graduate">Graduate Admission</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-libraries">Libraries</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-campus-map">Campus Map</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-community">Community Standards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-policies">Online Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">About Stanford</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-facts">Facts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-history">History</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-leadership">Leadership</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-employment">Employment</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-sm text-muted-foreground text-center md:text-left">
          <p>&copy; Stanford University, Stanford, California 94305.</p>
        </div>
      </div>
    </footer>
  );
}
