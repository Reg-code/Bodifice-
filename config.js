// FashionOS site settings. Edit these before going live; no rebuild needed
// (this file is copied as-is into dist/config.js).
window.FASHIONOS_CONFIG = {
  // Supabase project that stores waitlist sign-ups. Both values are public by design:
  // the table only accepts inserts and nobody can read it with this key.
  // Find them in Supabase → Project Settings → API. Leave empty for preview mode.
  supabaseUrl: "",
  supabaseKey: "",

  // Spam protection (recommended once live). Needs BOTH values. See README.
  turnstileSiteKey: "",
  submitFunctionUrl: "",

  // Analytics. Set any you use; all are optional.
  googleAnalyticsId: "",   // e.g. "G-XXXXXXXXXX"
  plausibleDomain: "",     // e.g. "fashionos.ai"
  clarityId: "",           // Microsoft Clarity project id

  // Contact + social links. Empty values are hidden on the site.
  contactEmail: "",
  instagramUrl: "",
  linkedinUrl: "",
  xUrl: ""
};
