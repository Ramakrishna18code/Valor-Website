import { useState } from 'react';
import { ArrowRight, Check, Phone, Zap } from 'lucide-react';

type Source = 'SERVICE' | 'CONTACT' | 'EMERGENCY';
type Enquiry = { source: Source; name: string; phone: string; building?: string; serviceType?: string; message?: string };

async function submitEnquiry(enquiry: Enquiry): Promise<string> {
  const origin = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
  const response = await fetch(`${origin}/api/v1/public/website-enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(enquiry),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || payload?.success !== true || !payload?.data?.reference) {
    throw new Error(response.status === 429 ? 'Too many requests. Please call Valor for help.' : 'We could not send your request. Please try again or call Valor.');
  }
  return payload.data.reference;
}

const phone = 'tel:+917799883994';
const whatsapp = 'https://wa.me/917799883994?text=Hello%20Valor%20Lift%2C%20I%20need%20service%20support.';

function EnquiryForm({ source, compact = false }: { source: Source; compact?: boolean }) {
  const [reference, setReference] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const emergency = source === 'EMERGENCY';
  if (reference) return <div className="success" role="status"><Check/><h2>Request received.</h2><p>Reference: <strong>{reference}</strong></p><p>{emergency ? 'For an urgent lift incident, call our emergency line now.' : 'The Valor team can now review your enquiry.'}</p><div className="request-actions"><a href={phone}><Phone/>Call Valor</a><a href={whatsapp}><Zap/>Message on WhatsApp</a></div></div>;
  return <form className={compact ? 'form' : 'request-form'} onSubmit={async event => {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    setBusy(true); setError('');
    try {
      setReference(await submitEnquiry({
        source,
        name: String(data.get('name') || '').trim(),
        phone: String(data.get('phone') || '').trim(),
        building: String(data.get('building') || '').trim() || undefined,
        serviceType: String(data.get('serviceType') || '').trim() || undefined,
        message: String(data.get('message') || '').trim() || undefined,
      }));
    } catch (problem) { setError(problem instanceof Error ? problem.message : 'Could not send your request.'); }
    finally { setBusy(false); }
  }}>
    {compact && <h2>{emergency ? 'Emergency support' : 'Tell us what is moving'}</h2>}
    <label>{compact ? 'Name' : 'Your name'}<input name="name" required maxLength={120} autoComplete="name" placeholder="Your full name" /></label>
    <label>{compact ? 'Phone' : 'Phone number'}<input name="phone" required minLength={7} maxLength={24} type="tel" autoComplete="tel" placeholder="Your mobile number" /></label>
    {compact && <label>Building / company<input name="building" required maxLength={160} placeholder="Building name" /></label>}
    <label>What do you need?<select name="serviceType" required={!compact} defaultValue=""><option value="">{compact ? 'Select a service (optional)' : 'Select a service'}</option>{['Maintenance','Repair','Modernization','Safety','Installation','Spare Parts'].map(value => <option key={value} value={value}>{value}</option>)}</select></label>
    {compact && <label>How can we help?<textarea name="message" maxLength={2000} placeholder="Tell us about the lift or requirement" /></label>}
    {error && <p className="enquiry-error" role="alert">{error}</p>}
    {emergency && <p className="enquiry-urgent">If anyone is trapped, call emergency services and Valor immediately.</p>}
    <button className="button primary" disabled={busy}>{busy ? 'Sending…' : emergency ? 'Request emergency support' : 'Send request'}<ArrowRight size={15}/></button>
  </form>;
}

export function ServiceEnquiryPage() { return <section className="request-page"><span className="eyebrow">REQUEST A SERVICE VISIT</span><h1>Tell us what<br/><em>you need.</em></h1><p className="request-lead">Share your details and our team will get in touch.</p><EnquiryForm source="SERVICE" /></section>; }
export function ContactEnquiryForm({ emergency = false }: { emergency?: boolean }) { return <EnquiryForm source={emergency ? 'EMERGENCY' : 'CONTACT'} compact />; }
