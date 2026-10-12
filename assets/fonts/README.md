# Interface fonts

DFVN Pencerio Hairline is the Vietnamese version supplied by DFVN. Its original
OTF is used without subsetting or conversion (CSS weight 100, normal). The
publisher states that the Vietnamese version is free for personal and commercial
use. The original designer is Indian Type Foundry; Vietnamese glyphs are by DFVN.
All Vietnamese letters and the U+1EA0–U+1EF9 tone range were checked numerically.
Source and usage terms: https://dafont.vn/dfvn-pencerio-font-viet-tay-viet-hoa/
Original family: https://www.fontshare.com/fonts/pencerio
The font binary is excluded from Git. GitHub Pages downloads the publisher's
original font during deployment for this website and verifies its SHA256.
Fontshare terms: https://www.fontshare.com/licenses/itf-ffl

Playfair Display by Claus Eggers Sørensen and Be Vietnam Pro by Lâm Bảo,
Tony Le and ViệtAnh Nguyễn, downloaded from Google Fonts on 2026-10-12.
Both families are distributed under the SIL Open Font License; their license
files are included in this directory.

The WOFF files keep Latin, Vietnamese, combining accents and punctuation, along
with font layout features. All Vietnamese letters were verified after conversion.

Sources:
- https://github.com/google/fonts/tree/main/ofl/playfairdisplay
- https://github.com/google/fonts/tree/main/ofl/bevietnampro

Only the six styles used by the interface are bundled. Together they are about
245 KiB. Keep this directory when deploying the site.
