import Link from "next/link";

const SMS_CONSENT_TEXT =
  "I agree to be contacted by Future Nest Realty via call, email, and text for real estate services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.";

export function SmsConsentCopy({ className }: { className?: string }) {
  return (
    <span className={className}>
      {SMS_CONSENT_TEXT}{" "}
      <Link href="/privacy" className="underline">
        Privacy Policy
      </Link>
    </span>
  );
}
