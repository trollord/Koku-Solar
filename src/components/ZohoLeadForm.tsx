import { useEffect, useRef } from 'react';

/**
 * Zoho Web-to-Lead form embed for the Contact page.
 *
 * IMPORTANT: The hidden fields (xnQsjsdp, zc_gad, xmIwtLD, actionType, returnURL,
 * honeypot) and the Zoho validation/analytics scripts are preserved verbatim —
 * they are required for Google Ads tracking (zc_gad) and the post-submit redirect
 * to /thank-you (returnURL). Only the presentational styling has been changed so
 * the form blends into the site (no Zoho #F2A113 background, full-width inputs,
 * site typography).
 */

// The Zoho markup, restyled. No <script> here (scripts are injected separately so
// they actually execute). Hidden fields and all name= attributes are untouched.
const FORM_HTML = `
<style>
  .koku-zoho-form { max-width: 100%; color: #2D2D2D; }
  .koku-zoho-form .kf-row { margin-bottom: 1.25rem; }
  .koku-zoho-form label {
    display: block;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.95rem;
    color: #374151;
    margin-bottom: 0.4rem;
  }
  .koku-zoho-form .kf-req { color: #dc2626; margin-left: 2px; }
  .koku-zoho-form input[type=text],
  .koku-zoho-form textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 1rem;
    color: #2D2D2D;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .koku-zoho-form textarea { min-height: 120px; resize: vertical; }
  .koku-zoho-form input[type=text]:focus,
  .koku-zoho-form textarea:focus {
    outline: none;
    border-color: #FF8C00;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.15);
  }
  .koku-zoho-form input[type=text][style*="display:none"],
  .koku-zoho-form input[type=hidden] { display: none !important; }
  .koku-zoho-form .kf-submit {
    width: 100%;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    color: #2D2D2D;
    background: #FF8C00;
    border: none;
    border-radius: 0.5rem;
    padding: 0.85rem 1rem;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .koku-zoho-form .kf-submit:hover { background: #facc15; }
  .koku-zoho-form .kf-submit:disabled { opacity: 0.6; cursor: not-allowed; }

  /* Compact variant — tighter spacing only (same fields, same params) so the
     form is shorter and sits with margin inside a one-viewport layout. */
  .koku-zoho-form--compact .kf-row { margin-bottom: 0.6rem; }
  .koku-zoho-form--compact label { margin-bottom: 0.15rem; font-size: 0.85rem; }
  .koku-zoho-form--compact input[type=text],
  .koku-zoho-form--compact textarea {
    padding: 0.45rem 0.8rem;
    border-radius: 0.45rem;
  }
  .koku-zoho-form--compact textarea { min-height: 56px; }
  .koku-zoho-form--compact .kf-submit { padding: 0.6rem 1rem; }
</style>
<div id="crmWebToEntityForm" class="crmWebToEntityForm koku-zoho-form">
  <form
    id="webform385163000003101001"
    action="https://crm.zoho.in/crm/WebToLeadForm"
    name="WebToLeads385163000003101001"
    method="POST"
    onsubmit='javascript:document.charset="UTF-8"; return checkMandatory385163000003101001()'
    accept-charset="UTF-8">
    <input type="text" style="display:none;" name="xnQsjsdp" value="9995b509eeb2c6bf3e2022eba491a00321e4b35e5d3094b8c23c36aea710351f">
    <input type="hidden" name="zc_gad" id="zc_gad" value="">
    <input type="text" style="display:none;" name="xmIwtLD" value="a7165301adea77de15f26f442bf1366eae3c64694a2758d20b22df38e7c295d92335da2c7a236d8601bebee01945f7cc">
    <input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
    <input type="text" style="display:none;" name="returnURL" value="https://kokusolar.com/thank-you">

    <div class="kf-row">
      <label for="Company">Organisation / Society Name <span class="kf-req">*</span></label>
      <input type="text" id="Company" aria-required="true" aria-label="Company" name="Company" maxlength="200">
    </div>
    <div class="kf-row">
      <label for="Zip_Code">Zip Code <span class="kf-req">*</span></label>
      <input type="text" id="Zip_Code" aria-required="true" aria-label="Zip Code" name="Zip Code" maxlength="30">
    </div>
    <div class="kf-row">
      <label for="Last_Name">Full Name <span class="kf-req">*</span></label>
      <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" maxlength="80">
    </div>
    <div class="kf-row">
      <label for="Phone">Phone <span class="kf-req">*</span></label>
      <input type="text" id="Phone" aria-required="true" aria-label="Phone" name="Phone" maxlength="30">
    </div>
    <div class="kf-row">
      <label for="Email">Email <span class="kf-req">*</span></label>
      <input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" crmlabel="" maxlength="100">
    </div>
    <div class="kf-row">
      <label for="Description">Message</label>
      <textarea aria-multiline="true" id="Description" aria-required="false" aria-label="Description" name="Description"></textarea>
    </div>

    <input type="text" style="display:none;" name="aG9uZXlwb3Q" value="">

    <div class="kf-row">
      <input type="submit" id="formsubmit" role="button" class="formsubmit kf-submit" value="Submit" aria-label="Submit" title="Submit">
    </div>
  </form>
</div>
`;

// Zoho's mandatory-check + email-validation + tooltip scripts, verbatim.
// `\s` is written as `\\s` so the emitted script source keeps the real backslash.
// Injected as a real <script> element so it runs (sloppy mode, as Zoho expects).
const VALIDATION_SCRIPT = `
function validateEmail385163000003101001(){
  var form = document.forms['WebToLeads385163000003101001'];
  var emailFld = form.querySelectorAll('[ftype=email]');
  var i;
  for(i = 0; i < emailFld.length; i++ ) {
    var emailVal = emailFld[i].value;
    if ((emailVal.replace (/^\\s+|\\s+$/g,'') ) .length != 0) {
      var atpos = emailVal.indexOf('@');
      var dotpos = emailVal.lastIndexOf('.');
      if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert('Please enter a valid email address. ');
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}
function checkMandatory385163000003101001(isAjax){
  var mndFileds = new Array('Company', 'Last Name', 'Email', 'Phone', 'Zip Code');
  var fldLangVal = new Array('Organisation \\/ Society Name', 'Full Name', 'Email', 'Phone', 'Zip Code');
  for (i = 0; i < mndFileds.length; i++ ) {
    var fieldObj = document.forms['WebToLeads385163000003101001'] [mndFileds[i]];
    if (fieldObj) {
      if(((fieldObj.value) .replace (/^\\s+|\\s+$/g,'') ) .length == 0) {
        if (fieldObj.type == 'file') {
          alert('Please select a file to upload.');
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + ' cannot be empty.');
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName == 'SELECT') {
        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
          alert(fldLangVal[i] + ' cannot be none.');
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type == 'checkbox') {
        if (fieldObj.checked == false) {
          alert('Please accept  ' + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      try{
        if (fieldObj.name == 'Last Name') {
          name = fieldObj.value;
        }
      } catch (e){}
    }
  }
  if ( !validateEmail385163000003101001 () ) {
    return false;
  }
  var urlparams = new URLSearchParams(window.location.search);
  if (urlparams.has ('service') && (urlparams.get ('service') === 'smarturl') ) {
    var webform = document.getElementById('webform385163000003101001');
    var service = urlparams.get('service');
    var smarturlfield = document.createElement('input');
    smarturlfield.setAttribute('type', 'hidden');
    smarturlfield.setAttribute('value', service);
    smarturlfield.setAttribute('name', 'service');
    webform.appendChild(smarturlfield);
  }
  document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}
_wFa_ajax_will_be_replaced = false;
if (typeof _wfa_fstprtcken == 'undefined') {
  _wfa_fstprtcken = {};
}
_wfa_fstprtcken[385163000003101001] = true;
function tooltipShow385163000003101001(el){
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if (tooltipDisplay == 'none') {
    var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
    for (i = 0; i < allTooltip.length; i++ ) {
      allTooltip[i].style.display = 'none';
    }
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }
}
`;

const ANALYTICS_SRC =
  'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5634ae2589a03ab463ba5a2278bbcd9d5d73d307156aca38b1b55e3a834d490f9556db6bfe959b37e3fc45957efec8f3gid2d05e19598d878695bd04c59fe5e9884a5850015b2577ad147803dc4158f8897gida930b39310e4b01051e6b307b0a5a3cf9964a23a753bdc8ec2d90aa91995de70gidfbc2625f16d543baf24330523d5cafed682aba4d2f76e2d069314c8f3aa23062&tw=9543f869c313360ed4a6d3c0b83db697d8da1806f2d13fa3cb6297323a79f9c6&version=v2';

export default function ZohoLeadForm({ compact = false }: { compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || initedRef.current) return;
    initedRef.current = true;

    // 1) Inject the form markup (styles apply; scripts here would NOT run).
    //    `compact` only tightens spacing — fields and Zoho params are unchanged.
    container.innerHTML = compact
      ? FORM_HTML.replace(
          'crmWebToEntityForm koku-zoho-form"',
          'crmWebToEntityForm koku-zoho-form koku-zoho-form--compact"'
        )
      : FORM_HTML;

    // 2) Inject the validation script as a real <script> so it executes and
    //    defines the global checkMandatory/validateEmail functions the form calls.
    const validationScript = document.createElement('script');
    validationScript.type = 'text/javascript';
    validationScript.text = VALIDATION_SCRIPT;
    container.appendChild(validationScript);

    // 3) Inject Zoho's analytics tracking script (required — "Do not remove").
    const analyticsScript = document.createElement('script');
    analyticsScript.id = 'wf_anal';
    analyticsScript.src = ANALYTICS_SRC;
    container.appendChild(analyticsScript);

    // 4) Zoho analytics page-location postMessage handshake.
    const wfa_pstMesgFrmFom = (evt: MessageEvent) => {
      if (evt.origin === 'https://crm.zoho.in' || evt.origin === 'https://crm.zohopublic.in') {
        const loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        (evt.source as Window)?.postMessage('prnt_wnd_pg_lc_rc_frm_prwindow_' + loc_obj, evt.origin);
      }
    };
    window.addEventListener('message', wfa_pstMesgFrmFom, false);

    return () => {
      window.removeEventListener('message', wfa_pstMesgFrmFom, false);
    };
  }, [compact]);

  return <div ref={containerRef} />;
}
