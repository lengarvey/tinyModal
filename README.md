A crazy simple JQuery plugin for modal windows.

Open the modal:

```js
$('#your-modal').tinyModal();
```

You can style the overlay that greys out the background as follows. So
put this rule into your CSS somewhere:

```css
#tiny_overlay {
  position: fixed;
  z-index: 10000;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: #000;
  display: none;
}
```

it's that easy.

Based on: https://github.com/FinelySliced/leanModal.js
