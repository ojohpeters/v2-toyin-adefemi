'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submit-form';

type FormKey = 'agreement' | 'intake' | 'parent' | 'minor';

const FORMS: { key: FormKey; title: string; subtitle: string }[] = [
  { key: 'agreement', title: 'Client Agreement & Consent', subtitle: 'For adult clients (18+)' },
  { key: 'intake', title: 'Client Intake Form', subtitle: 'For adult clients (18+)' },
  { key: 'parent', title: 'Parent / Guardian Consent', subtitle: 'Required for minors' },
  { key: 'minor', title: 'Minor Intake Form', subtitle: 'For clients ages 10–17' },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
        <h4 className="text-base font-bold uppercase tracking-[0.2em] text-[var(--peach)] sm:text-lg">{title}</h4>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  full,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  placeholder?: string;
}) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="mb-1.5 block text-sm font-medium text-black/75">
        {label} {required && <span className="text-[var(--peach)]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-all focus:border-[var(--peach)] focus:ring-2 focus:ring-[var(--peach)]/20"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block sm:col-span-2">
      <span className="mb-1.5 block text-sm font-medium text-black/75">
        {label} {required && <span className="text-[var(--peach)]">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-all focus:border-[var(--peach)] focus:ring-2 focus:ring-[var(--peach)]/20"
      />
    </label>
  );
}

function Checkbox({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 transition-all hover:border-[var(--peach)]/40">
      <input
        name={name}
        type="checkbox"
        required={required}
        className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer accent-[var(--peach)]"
      />
      <span className="text-sm leading-6 text-black/75">{label}</span>
    </label>
  );
}

function Signature({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-[var(--peach)]/30 bg-[var(--background)] p-5 sm:col-span-2">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--peach)]">E-Signature</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Type your full name as signature" name={`${name}_signature`} required />
        <Field label="Date" name={`${name}_date`} type="date" required />
      </div>
    </div>
  );
}

function SuccessNote({ title }: { title: string }) {
  return (
    <div className="rounded-3xl bg-white p-10 text-center shadow-[0_16px_40px_rgba(254,143,104,0.18)] ring-1 ring-[var(--peach)]/20">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--peach)]/15">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7 text-[var(--peach)]" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-black">{title}</h4>
      <p className="mx-auto mt-3 max-w-md text-base leading-7 text-black/65">
        Thank you. Your submission has been received. You will hear from Toyin within 24–48 hours to confirm next steps.
      </p>
    </div>
  );
}

function FormShell({
  active,
  onSubmit,
  submitted,
  submitting,
  error,
  successTitle,
  children,
}: {
  active: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
  submitting: boolean;
  error: string;
  successTitle: string;
  children: React.ReactNode;
}) {
  if (!active) return null;
  if (submitted) return <SuccessNote title={successTitle} />;
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {children}
      <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-end">
        <p className="text-xs text-black/55">
          By submitting, you confirm the above is true to the best of your knowledge.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Submitting…' : 'Submit Form'}
        </button>
      </div>
      {error && (
        <p className="text-right text-sm font-medium text-[var(--peach)]">{error}</p>
      )}
    </form>
  );
}

export default function IntakeForms() {
  const [active, setActive] = useState<FormKey>('agreement');
  const [submitted, setSubmitted] = useState<Record<FormKey, boolean>>({
    agreement: false,
    intake: false,
    parent: false,
    minor: false,
  });
  const [submitting, setSubmitting] = useState<Record<FormKey, boolean>>({
    agreement: false,
    intake: false,
    parent: false,
    minor: false,
  });
  const [errors, setErrors] = useState<Record<FormKey, string>>({
    agreement: '',
    intake: '',
    parent: '',
    minor: '',
  });

  function handleSubmit(key: FormKey) {
    return async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const payload: Record<string, FormDataEntryValue> = {};
      data.forEach((v, k) => {
        payload[k] = v;
      });
      setSubmitting((s) => ({ ...s, [key]: true }));
      setErrors((s) => ({ ...s, [key]: '' }));
      try {
        await submitForm(key, payload);
        setSubmitted((s) => ({ ...s, [key]: true }));
        window.scrollTo({ top: document.getElementById('intake-forms')?.offsetTop ?? 0, behavior: 'smooth' });
      } catch {
        setErrors((s) => ({
          ...s,
          [key]: 'Something went wrong. Please try again or email Toyin directly.',
        }));
      } finally {
        setSubmitting((s) => ({ ...s, [key]: false }));
      }
    };
  }

  return (
    <section id="intake-forms" className="relative bg-[var(--background)] px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
            <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Forms</p>
            <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
          </div>
          <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl">
            Begin Your <span className="text-[var(--peach)]">Healing Journey</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
            Below are the forms you may need before your first session. Select the form that applies to you, complete it,
            and submit — Toyin will follow up shortly.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FORMS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? 'border-[var(--peach)] bg-[var(--peach)] text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)]'
                    : 'border-black/10 bg-white text-black hover:border-[var(--peach)]/40'
                }`}
              >
                <p className={`text-sm font-bold ${isActive ? 'text-white' : 'text-black'}`}>{f.title}</p>
                <p className={`mt-1 text-xs ${isActive ? 'text-white/85' : 'text-black/55'}`}>{f.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Form card */}
        <div className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5 sm:p-10">

          {/* AGREEMENT */}
          <FormShell
            active={active === 'agreement'}
            onSubmit={handleSubmit('agreement')}
            submitted={submitted.agreement}
            submitting={submitting.agreement}
            error={errors.agreement}
            successTitle="Agreement Received"
          >
            <Section title="1. Client Information">
              <Field label="Full Name" name="full_name" required />
              <Field label="Date of Birth" name="dob" type="date" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Home Address" name="address" full />
            </Section>

            <Section title="2. Nature of Counseling">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                I understand that the counseling provided by Toyin Adefemi is clinically informed biblical counseling,
                grounded in Scripture and integrated with practical mental-health understanding. It is not psychotherapy
                and does not replace clinical mental-health treatment when indicated.
              </p>
            </Section>

            <Section title="3. Confidentiality">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                Information shared in counseling is held in confidence except where disclosure is required by law (e.g.,
                imminent risk of harm to self or others, abuse of a minor or vulnerable adult, or court order).
              </p>
            </Section>

            <Section title="4. Session Format & Fees">
              <Field label="Preferred Session Format" name="format" placeholder="Virtual / In-person" />
              <Field label="Agreed Session Fee" name="fee" placeholder="$ amount" />
            </Section>

            <Section title="5. Cancellation Policy">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                Please provide at least 24 hours notice for cancellations. Late cancellations may be charged the full session fee.
              </p>
            </Section>

            <Section title="6. Emergency Procedures">
              <Field label="Emergency Contact Name" name="emergency_name" required />
              <Field label="Emergency Contact Phone" name="emergency_phone" type="tel" required />
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                In a mental-health emergency, please call 988 (Suicide & Crisis Lifeline) or 911 immediately.
              </p>
            </Section>

            <Section title="7. Communication Between Sessions">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                Email and text are not secure forms of communication and should be limited to scheduling.
              </p>
            </Section>

            <Section title="8. Recording & Documentation">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                Sessions are not recorded. Brief, confidential session notes may be kept for continuity of care.
              </p>
            </Section>

            <Section title="9. Client Consent">
              <div className="sm:col-span-2 space-y-3">
                <Checkbox name="consent_understand" label="I have read and understand the nature of clinically informed biblical counseling described above." required />
                <Checkbox name="consent_confidentiality" label="I understand the limits of confidentiality." required />
                <Checkbox name="consent_fees" label="I agree to the session fees and cancellation policy." required />
                <Checkbox name="consent_voluntary" label="I am voluntarily entering into this counseling relationship and understand I may end it at any time." required />
              </div>
            </Section>

            <Section title="10. Signature">
              <Signature name="agreement" />
            </Section>
          </FormShell>

          {/* INTAKE */}
          <FormShell
            active={active === 'intake'}
            onSubmit={handleSubmit('intake')}
            submitted={submitted.intake}
            submitting={submitting.intake}
            error={errors.intake}
            successTitle="Intake Form Received"
          >
            <Section title="1. Personal Information">
              <Field label="Full Name" name="full_name" required />
              <Field label="Preferred Name" name="preferred_name" />
              <Field label="Date of Birth" name="dob" type="date" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Occupation" name="occupation" />
            </Section>

            <Section title="2. Background">
              <Textarea label="Briefly describe what brings you to counseling at this time" name="background_reason" rows={4} required />
              <Textarea label="Have you received counseling before? If so, what was helpful or unhelpful?" name="background_prior" rows={3} />
            </Section>

            <Section title="3. Emotional & Mental Health">
              <Textarea
                label="Are you currently experiencing any of the following? (anxiety, depression, grief, anger, trauma, etc.)"
                name="emotional_current"
                rows={3}
              />
              <Field label="Current Medications (if any)" name="medications" full />
              <Field label="Are you currently under the care of a physician or psychiatrist?" name="under_care" full />
            </Section>

            <Section title="4. Faith Background">
              <Field label="How would you describe your relationship with God?" name="faith_relationship" full />
              <Field label="Church / faith community (if any)" name="faith_church" full />
              <Textarea label="How do you currently engage with Scripture and prayer?" name="faith_engagement" rows={3} />
            </Section>

            <Section title="5. Family & Relationships">
              <Field label="Marital status" name="marital_status" />
              <Field label="Children (ages, if any)" name="children" />
              <Textarea label="Briefly describe your family of origin and any significant relationships" name="family_origin" rows={3} />
            </Section>

            <Section title="6. Goals">
              <Textarea label="What do you hope to gain from counseling?" name="goals" rows={4} required />
            </Section>

            <Section title="7. Practical Details">
              <Field label="Preferred session day(s)" name="practical_day" />
              <Field label="Preferred session time(s)" name="practical_time" />
              <Field label="Preferred format" name="practical_format" placeholder="Virtual / In-person" />
            </Section>

            <Section title="8. Consent">
              <div className="sm:col-span-2 space-y-3">
                <Checkbox
                  name="intake_consent_accurate"
                  label="I confirm the information provided above is accurate to the best of my knowledge."
                  required
                />
                <Checkbox
                  name="intake_consent_share"
                  label="I give consent for Toyin Adefemi to use this information for the purpose of providing biblical counseling."
                  required
                />
              </div>
            </Section>

            <Section title="9. Signature">
              <Signature name="intake" />
            </Section>
          </FormShell>

          {/* PARENT */}
          <FormShell
            active={active === 'parent'}
            onSubmit={handleSubmit('parent')}
            submitted={submitted.parent}
            submitting={submitting.parent}
            error={errors.parent}
            successTitle="Parent / Guardian Consent Received"
          >
            <Section title="1. Parent / Guardian Information">
              <Field label="Parent / Guardian Full Name" name="parent_name" required />
              <Field label="Relationship to Minor" name="parent_relationship" required />
              <Field label="Phone" name="parent_phone" type="tel" required />
              <Field label="Email" name="parent_email" type="email" required />
              <Field label="Home Address" name="parent_address" full />
            </Section>

            <Section title="2. Minor's Information">
              <Field label="Minor's Full Name" name="minor_name" required />
              <Field label="Minor's Date of Birth" name="minor_dob" type="date" required />
              <Field label="Minor's Age" name="minor_age" />
              <Field label="School" name="minor_school" />
            </Section>

            <Section title="3. Reason for Counseling">
              <Textarea
                label="Briefly describe what brings your child to counseling at this time"
                name="reason"
                rows={4}
                required
              />
            </Section>

            <Section title="4. Custody & Authority">
              <Field label="Do you have legal authority to consent to counseling for this minor?" name="custody_authority" full required placeholder="Yes / No" />
              <Textarea label="If joint custody, please describe the arrangement" name="custody_details" rows={3} />
            </Section>

            <Section title="5. Confidentiality with Minors">
              <p className="sm:col-span-2 text-sm leading-7 text-black/65">
                I understand that what my child shares in counseling is generally confidential to support the building of trust,
                except where there is risk of harm to self or others, suspected abuse, or other legally required disclosures.
                Toyin will share general themes and recommendations with me as appropriate.
              </p>
            </Section>

            <Section title="6. Emergency Information">
              <Field label="Emergency Contact (if different)" name="emergency_name" />
              <Field label="Emergency Phone" name="emergency_phone" type="tel" />
              <Field label="Minor's Physician / Therapist (if any)" name="physician" full />
            </Section>

            <Section title="7. Consent">
              <div className="sm:col-span-2 space-y-3">
                <Checkbox name="parent_consent_authority" label="I confirm I have legal authority to consent to counseling for this minor." required />
                <Checkbox name="parent_consent_understand" label="I understand the nature of clinically informed biblical counseling and the limits of confidentiality." required />
                <Checkbox name="parent_consent_fees" label="I agree to the session fees and cancellation policy." required />
              </div>
            </Section>

            <Section title="8. Signature">
              <Signature name="parent" />
            </Section>
          </FormShell>

          {/* MINOR */}
          <FormShell
            active={active === 'minor'}
            onSubmit={handleSubmit('minor')}
            submitted={submitted.minor}
            submitting={submitting.minor}
            error={errors.minor}
            successTitle="Intake Received"
          >
            <Section title="1. About You">
              <Field label="Your Name" name="name" required />
              <Field label="Preferred Name / Nickname" name="preferred_name" />
              <Field label="Your Age" name="age" required />
              <Field label="Your Birthday" name="dob" type="date" required />
              <Field label="Grade in School" name="grade" />
              <Field label="School Name" name="school" />
            </Section>

            <Section title="2. About Your Family">
              <Textarea label="Who lives with you at home?" name="family_home" rows={3} />
              <Field label="Do you have brothers or sisters? (ages)" name="siblings" full />
            </Section>

            <Section title="3. How Are You Feeling Lately?">
              <Textarea
                label="What are some feelings you've been having a lot lately? (sad, worried, angry, tired, etc.)"
                name="feelings"
                rows={3}
              />
              <Textarea label="When was the last time you felt really happy or peaceful? What was happening?" name="happy_moment" rows={3} />
            </Section>

            <Section title="4. Things on Your Mind">
              <Textarea label="What are some things that bother you the most right now?" name="bothers" rows={3} required />
            </Section>

            <Section title="5. School & Friends">
              <Field label="How is school going?" name="school_status" full />
              <Field label="How are things with your friends?" name="friends_status" full />
            </Section>

            <Section title="6. Your Faith">
              <Field label="How do you feel about God right now?" name="faith_feeling" full />
              <Field label="Do you go to church? (which one)" name="church" full />
            </Section>

            <Section title="7. Fun Stuff">
              <Field label="What do you enjoy doing for fun?" name="fun_hobbies" full />
              <Field label="What are you really good at?" name="strengths" full />
            </Section>

            <Section title="8. Your Hopes">
              <Textarea label="What do you hope to talk about or get help with in our sessions?" name="hopes" rows={3} required />
            </Section>

            <Section title="9. Anything Else?">
              <Textarea label="Is there anything else you want Toyin to know about you?" name="anything_else" rows={3} />
            </Section>

            <Section title="10. Sign Here">
              <Signature name="minor" />
            </Section>
          </FormShell>

        </div>
      </div>
    </section>
  );
}
