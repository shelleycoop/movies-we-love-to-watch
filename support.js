const supportConfig = window.afterCreditsSupport || {};
const upiId = String(supportConfig.upiId || '').trim();
const payeeName = String(supportConfig.payeeName || 'After the Credits').trim();
const amountButtons = [...document.querySelectorAll('.amount-option')];
const customAmount = document.querySelector('#custom-amount');
const contributionLink = document.querySelector('#contribution-link');
const supportStatus = document.querySelector('#support-status');
const upiDetails = document.querySelector('#upi-details');
const year = document.querySelector('#year');
let selectedAmount = 100;

if (year) year.textContent = new Date().getFullYear();

function setContributionAmount(amount) {
  const value = Number(amount);
  const validAmount = Number.isSafeInteger(value) && value > 0;
  contributionLink.setAttribute('aria-disabled', String(!upiId || !validAmount));
  contributionLink.classList.toggle('is-disabled', !upiId || !validAmount);
  if (!upiId) {
    contributionLink.href = '#';
    return;
  }
  if (!validAmount) {
    contributionLink.href = '#';
    supportStatus.textContent = 'Enter a whole rupee amount greater than zero.';
    return;
  }

  supportStatus.textContent = 'Review the recipient and amount in your UPI app before confirming.';
  const parameters = new URLSearchParams({
    pa: upiId,
    pn: payeeName,
    am: String(value),
    cu: 'INR',
    tn: 'Support After the Credits'
  });
  contributionLink.href = `upi://pay?${parameters.toString()}`;
}

if (upiId) {
  amountButtons.forEach(button => { button.disabled = false; });
  customAmount.disabled = false;
  upiDetails.hidden = false;
  document.querySelector('#upi-id-display').textContent = upiId;
  supportStatus.textContent = 'Review the recipient and amount in your UPI app before confirming.';
  setContributionAmount(selectedAmount);

  amountButtons.forEach(button => button.addEventListener('click', () => {
    selectedAmount = Number(button.dataset.amount);
    customAmount.value = '';
    amountButtons.forEach(option => {
      const selected = option === button;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    setContributionAmount(selectedAmount);
  }));

  customAmount.addEventListener('input', () => {
    amountButtons.forEach(option => {
      option.classList.remove('selected');
      option.setAttribute('aria-pressed', 'false');
    });
    setContributionAmount(customAmount.value);
  });

  document.querySelector('#copy-upi').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      supportStatus.textContent = 'UPI ID copied.';
    } catch {
      supportStatus.textContent = 'Select the UPI ID above to copy it.';
    }
  });
}

contributionLink.addEventListener('click', event => {
  if (contributionLink.getAttribute('aria-disabled') === 'true') event.preventDefault();
});
