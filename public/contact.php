<?php
/**
 * contact.php — shared email handler for every form on the site.
 *
 * The site is a static export hosted on Bluehost; this PHP file sits next to
 * index.html in public_html. All forms POST JSON: { formType, fields } and this
 * script emails the submission to the address configured below.
 *
 * ───────────────────────── CONFIG — EDIT THESE ─────────────────────────
 * $TO    = where form submissions are delivered (can be any inbox, incl. Gmail).
 * $FROM  = the "from" address. MUST be on the WEBSITE's own domain — never a
 *          @gmail.com address, or Gmail's anti-spoofing (DMARC) will reject it.
 *          Leave $FROM = '' to auto-use  no-reply@<the site's domain>.
 *          (The visitor's address is set as Reply-To automatically, so replies
 *          from your inbox go straight back to them.)
 */
$TO   = 'gideonfajemilusi08@gmail.com';
$FROM = 'no-reply@toyinadefemi.com'; // on the site's own domain — NOT a @gmail.com address.
/** ──────────────────────────────────────────────────────────────────────── */

header('Content-Type: application/json; charset=utf-8');

// Only accept POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

// Read the JSON body the forms send.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body.']);
    exit;
}

$formType = isset($data['formType']) ? (string) $data['formType'] : 'contact';
$fields   = isset($data['fields']) && is_array($data['fields']) ? $data['fields'] : [];

// Honeypot: real users leave this empty. Bots fill every field, so if a hidden
// "company" field arrives populated, silently accept without sending.
if (!empty($fields['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}
unset($fields['company']);

if (count($fields) === 0) {
    http_response_code(400);
    echo json_encode(['error' => 'No form data provided.']);
    exit;
}

// Human-friendly subject per form.
$subjects = [
    'contact'        => 'New contact message',
    'footer'         => 'New message (footer form)',
    'book-a-session' => 'New session request',
    'agreement'      => 'New client agreement & consent',
    'intake'         => 'New client intake form',
    'parent'         => 'New parent / guardian consent',
    'minor'          => 'New minor intake form',
];
$subject = isset($subjects[$formType]) ? $subjects[$formType] : 'New form submission';

/** Turn snake_case / camelCase keys into readable labels. */
function humanize($key) {
    $s = preg_replace('/[_-]+/', ' ', $key);
    $s = preg_replace('/([a-z])([A-Z])/', '$1 $2', $s);
    return ucwords(trim($s));
}

/** Normalize a field value into a display string. */
function display_value($value) {
    if (is_array($value)) {
        return implode(', ', array_map('strval', $value));
    }
    // Checkbox inputs submit the string "on" when checked.
    if ($value === 'on' || $value === true) {
        return 'Yes';
    }
    return (string) $value;
}

// Build HTML + plain-text bodies, skipping empty values.
$rowsHtml = '';
$textLines = [];
$replyTo = null;
$rowIndex = 0;

foreach ($fields as $key => $value) {
    $val = display_value($value);
    if ($val === '') {
        continue;
    }
    $label = humanize($key);

    // Capture the visitor's email for Reply-To.
    if ($replyTo === null && stripos($key, 'email') !== false
        && filter_var($val, FILTER_VALIDATE_EMAIL)) {
        $replyTo = $val;
    }

    $bg = ($rowIndex % 2 === 0) ? '#ffffff' : '#fbf7f4';
    $rowIndex++;
    $rowsHtml .= '<tr>'
        . '<td style="padding:12px 16px;font-weight:600;vertical-align:top;color:#1a1a1a;width:38%;background:' . $bg . ';border-bottom:1px solid #f0e6e0;">'
        . htmlspecialchars($label, ENT_QUOTES, 'UTF-8') . '</td>'
        . '<td style="padding:12px 16px;vertical-align:top;color:#333333;background:' . $bg . ';border-bottom:1px solid #f0e6e0;white-space:pre-wrap;">'
        . nl2br(htmlspecialchars($val, ENT_QUOTES, 'UTF-8')) . '</td>'
        . '</tr>';

    $textLines[] = $label . ': ' . $val;
}

// Resolve the sending domain. From must be on this domain (set above); if it was
// left blank, default to no-reply@<domain> so SPF/DKIM align and it avoids spam.
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$domain = preg_replace('/^www\./i', '', $host);
if ($FROM === '') {
    $FROM = 'no-reply@' . $domain;
}

// Branded HTML email matching the site's peach palette.
$peach = '#FE8F68';
$html = '<!DOCTYPE html><html><head><meta charset="utf-8"></head>'
    . '<body style="margin:0;padding:0;background:#f4f2ef;">'
    . '<div style="max-width:640px;margin:0 auto;padding:24px 12px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">'
    . '<div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">'
    . '<div style="background:' . $peach . ';padding:24px 28px;">'
    . '<p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.9);font-weight:700;">Toyin Adefemi &middot; Website</p>'
    . '<h1 style="margin:6px 0 0;font-size:20px;color:#ffffff;font-weight:700;">' . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . '</h1>'
    . '</div>'
    . '<div style="padding:24px 28px 8px;">'
    . '<p style="margin:0 0 16px;font-size:14px;color:#555555;line-height:1.6;">You received a new submission from the website. Just hit <strong>Reply</strong> to respond directly to the sender.</p>'
    . '<table style="width:100%;border-collapse:collapse;border:1px solid #f0e6e0;border-radius:10px;overflow:hidden;">' . $rowsHtml . '</table>'
    . '</div>'
    . '<div style="padding:16px 28px 26px;">'
    . '<p style="margin:0;font-size:12px;color:#aaaaaa;">Sent automatically from ' . htmlspecialchars($domain, ENT_QUOTES, 'UTF-8') . ' &middot; Form: ' . htmlspecialchars($formType, ENT_QUOTES, 'UTF-8') . '</p>'
    . '</div>'
    . '</div></div></body></html>';
$text = implode("\n", $textLines);

// Headers. From is on-domain; Reply-To routes replies to the visitor.
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Toyin Adefemi Website <' . $FROM . '>';
if ($replyTo !== null) {
    $headers[] = 'Reply-To: ' . $replyTo;
}

$ok = mail($TO, $subject . ' — ' . $host, $html, implode("\r\n", $headers));

if (!$ok) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send message.']);
    exit;
}

echo json_encode(['ok' => true]);
