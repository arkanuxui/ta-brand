import { useState } from 'react';

// A small interactive "island": only this button ships JS to the browser.
// Used for click-to-copy on color swatches.
export default function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    if (navigator.clipboard) navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button className={'copy-btn' + (copied ? ' copied' : '')} onClick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
