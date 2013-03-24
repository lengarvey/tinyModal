A crazy simple JQuery plugin for modal windows.

Open the modal:

```js
$('#your-modal').tinyModal();
```

You can style the overlay that grey's out the background as follows. So
put the following into your CSS file somewhere

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

Slightly based on: https://github.com/FinelySliced/leanModal.js
