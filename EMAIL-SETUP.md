# Email setup & deploy (Bluehost)

The website's forms (Contact, footer, Book-a-Session, and the four intake/consent
forms) all send their submissions by email to a Bluehost mailbox. The site is a
**static export** hosted on Bluehost; a single `contact.php` file does the mailing.

This is a one-time setup. After it's done, every form just works.

Submissions are currently set to be delivered to **toyin.biblicalcounselor@gmail.com**.

---

## 1. Configure `contact.php` (already done — just verify)

Open `contact.php` (it sits in `public_html` next to `index.html` after deploy —
see step 2) and check the two lines at the top:

```php
$TO   = 'toyin.biblicalcounselor@gmail.com';   // where submissions are delivered
$FROM = 'no-reply@toyinadefemi.com';      // on the site's own domain
```

- **`$TO`** is the inbox that receives every submission. Change it here any time.
- **`$FROM`** sends from `no-reply@toyinadefemi.com` — the site's own domain, so
  SPF/DKIM align and it stays out of spam. This must stay an address on
  `toyinadefemi.com` — **never** a `@gmail.com` address, or Gmail will reject it
  as spoofed. (The mailbox doesn't need to actually exist.) Replies are handled
  separately — see below.

> **Replies just work:** the script sets **Reply-To** to whatever email the
> visitor typed. Hitting "Reply" in the Gmail inbox goes straight back to them.

## 2. Build and upload the site

On the developer machine:

```bash
npm install        # node_modules isn't committed
npm run build      # produces the static site in the `out/` folder
```

This produces a ready-to-upload zip at the project root:
`toyinadefemi-public_html.zip` (re-create it any time with
`cd out && zip -r ../toyinadefemi-public_html.zip . -x '.*'`).

To deploy in **cPanel → File Manager**:

1. Open `public_html` (delete its current contents first if redeploying).
2. **Upload** `toyinadefemi-public_html.zip`.
3. Right-click it → **Extract** into `public_html`.
4. Delete the zip afterward.

The files sit at the **root** of the zip (`index.html`, `contact.php`,
`contact/`, `book-a-session/`, …), so everything lands directly in
`public_html` — no nested folder. `contact.php` is included automatically
because it lives in the project's `public/` folder.

## 3. Test it

On the live site, submit the Contact form with your own email in the email field.
Within a moment the submission should arrive at the Gmail inbox. Hit **Reply** and
confirm it addresses the email you typed in the form.

> The forms **cannot** be tested with `npm run dev` locally — PHP only runs on
> Bluehost. Test on the live domain.

> **First test landed in spam?** Because mail is sent from the domain to an
> external Gmail, check **cPanel → Email Deliverability** and make sure SPF and
> DKIM show as valid for the domain (Bluehost usually sets these up
> automatically). That keeps submissions out of the spam folder.

---

## Notes & troubleshooting

- **Mail not arriving / going to spam:** PHP's `mail()` is the simplest method and
  is fine for a site this size, but mail from a domain to an external Gmail can
  occasionally land in spam. First check **cPanel → Email Deliverability** (SPF /
  DKIM valid). If it's still a problem, the developer can upgrade `contact.php`
  to send via authenticated SMTP using PHPMailer (more reliable delivery) — the
  form side needs no changes.
- **Form fails with a `403` "Just a moment…" / `challenges.cloudflare.com` in
  the console:** the domain is proxied through **Cloudflare**, and Cloudflare's
  bot challenge is blocking the POST to `/contact.php`. A background request
  can't pass a managed challenge, so this MUST be fixed in the Cloudflare
  dashboard for `toyinadefemi.com`:
    1. **Easiest:** Security → **Bots** → turn **Bot Fight Mode** OFF (it
       challenges legitimate form/API POSTs).
    2. **Targeted (recommended, leaves bot protection on elsewhere):**
       Security → **WAF** → **Custom rules** → Create rule:
       `URI Path equals /contact.php` → Action **Skip** → tick **Managed
       Challenge** / **Bot Fight Mode** (and set Security Level to "Essentially
       Off" for that rule). Deploy.
    3. If Cloudflare is managed through Bluehost's cPanel "Cloudflare" plugin,
       you may need to log into the Cloudflare account directly to add the rule.
  After saving, re-test the form — no site changes needed.
- **Form fails with a `409` (`humans_… cookie` challenge):** that's Bluehost's
  own bot protection. The form already detects this one, sets the cookie it asks
  for, and retries automatically (see `lib/submit-form.ts`). If it persists, ask
  Bluehost support to disable the JS/bot challenge for `POST /contact.php`.
- **Sending limits:** Bluehost shared hosting caps outgoing mail (hundreds/day),
  which is far more than this site will ever use.
- **Spam bots:** `contact.php` includes a hidden "honeypot" check. If spam picks
  up, ask the developer to add the matching hidden field to the forms.
- **Where things live:** form code is in `app/contact/page.tsx`,
  `components/footer.tsx`, `app/book-a-session/page.tsx`, and
  `app/book-a-session/_components/intake-forms.tsx`; the mail handler is
  `public/contact.php`; static-export settings are in `next.config.js`.
