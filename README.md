# After the Credits

A responsive, standalone film journal. Open `index.html` in a browser to view it; there is no build step or package install.

The six film notes are starter examples. Use **Add a film** to create your own, then open any entry to edit or delete it. Entries and saved notes live in this browser's local storage; they are not synced or published online.

Each film opens on its own long-form page at `?post=ID`. Search, mood filters, sorting, and saved notes work in the browser.

## Support contributions

The separate `support.html` page offers one-time contributions in suggested or custom amounts. It opens a UPI payment intent using the recipient settings in `support-config.js`. The configured UPI ID is displayed publicly on the Support page. Visitors complete and confirm payment in their UPI app; this static site does not receive payment confirmations or store payment records.

The site must be hosted for other people to visit it. On supported devices, the payment button opens a UPI app; visitors can also copy the displayed UPI ID and pay from their app.

## Make it yours

- Change the journal title, introduction, and copy in `index.html`.
- Edit starter film notes in the `starterPosts` array at the top of `script.js`.
- Update the mood filter labels in `index.html` and use matching tags on posts in `script.js`.
- Change the contribution recipient settings in `support-config.js`.
