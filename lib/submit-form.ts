/**
 * Posts a form submission to /contact.php (the Bluehost mail handler).
 *
 * Bluehost's bot protection sometimes intercepts the first background POST and
 * replies with an HTTP 409 JS challenge instead of running PHP:
 *
 *   <script>document.cookie = "humans_NNNNN=1"; document.location.reload(true)</script>
 *
 * A normal page navigation would run that inline script (set the cookie, reload)
 * and the retry would pass. A `fetch()` can't execute it, so we detect the
 * challenge, set the cookie it asks for, and retry the request once.
 *
 * Throws on failure; resolves on success.
 */
export async function submitForm(
  formType: string,
  fields: Record<string, unknown>
): Promise<void> {
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, fields }),
  };

  let res = await fetch('/contact.php', options);

  // Handle the bot-protection cookie challenge, then retry once.
  if (!res.ok) {
    const challenge = await res.clone().text().catch(() => '');
    const match = challenge.match(/document\.cookie\s*=\s*["']([^"']+)["']/i);
    if (match) {
      document.cookie = `${match[1]}; path=/`;
      res = await fetch('/contact.php', options);
    }
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('contact.php failed', res.status, detail);
    throw new Error('Request failed');
  }
}
